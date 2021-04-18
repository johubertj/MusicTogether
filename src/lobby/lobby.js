import React, { useState, useEffect } from 'react';
import {Box} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
// import queryString from 'query-string';
// import io from 'socket.io-client';
import useStyles from './styles';
import useAuth from '../useAuth'
import TrackResult from '../TrackResult/TrackResult'
import Audio from '../Audio/Audio'

let socket;

const spotifyApi = new SpotifyWebApi({
    clientId: "9cc5ff6476344775a9526ff70cf1d3e7",
})
const Lobby = (props) => {
    // const [name, setName] = useState("");
    // const [room, setRoom] = useState("");
    // const ENDPOINT = 'localhost:5000';

    // //purpose -> run whenever lobby is rendered 
    // useEffect(() => {
    //     const { name, room } = queryString.parse(location.search);
    //     // console.log(name, room)

    //     socket = io(ENDPOINT);

    //     setName(name);
    //     setRoom(room);
    //     socket.on("users", users => {
    //         setUsers(users);
    //     });

    //     socket.on("connected", username =>{
    //         setUsers(users => [...users, username]);
    //         console.log(users);
    //     });

    //     socket.on("disconnected", username =>{
    //     //Creates a new list, filtering out username of person who left
    //         return users.filter(name => name != username);
    //     });
    //     socket.emit('join', { name, room }, () => {

    //     });

    //     return () => {
    //         socket.emit('disconnect');
    //         socket.off();
    //     }

    // }, [ENDPOINT, location.search]);
    //----------------------------------------------spotify

    const classes = useStyles();
    const accessToken = useAuth(props.code);

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState();  

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }

    //hook for lyrics
    useEffect(() => {
        if (!playingTrack) return

        axios.get('http://localhost:3001/lyrics', {
            params: {
                track: playingTrack.title,
                aritist: playingTrack.artist
            }
        }).then(res => {
            setLyrics(res.data.lyrics)
        })

    }, [playingTrack])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(
                res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image
                            return smallest
                        },
                        track.album.images[0]
                    )

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    }
                })
            )
        })

        return () => (cancel = true)
    }, [search, accessToken])

    return (
        <div class="player">
            <Box style={{ height: "100vh" }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField label="Search Song" variant="outlined" value={search}
                        onChange={e => setSearch(e.target.value)} />
                </form>

                <Box component="div" overflow="visible" style={{ overflowY: "scroll", overflowX: "hidden", height: "80vh"}}>
                    {searchResults.map(track => (
                        <TrackResult
                            track={track}
                            key={track.uri}
                            chooseTrack={chooseTrack}
                        />
                    ))}
                    {searchResults.length === 0 && (
                        <div className={classes.root} style={{ whiteSpace: "pre" }}>
                            {lyrics}
                        </div>
                    )}
                </Box>


                <div>
                    <Audio accessToken={accessToken} trackUri={playingTrack?.uri}/>
                </div>
                

            </Box>
        </div>
        
    )
}

export default Lobby;