import React, { useState, useEffect } from 'react';
import {Box} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"
import useStyles from './styles';
import useAuth from '../useAuth'
import TrackResult from '../TrackResult/TrackResult'
import Audio from '../Audio/Audio'

const spotifyApi = new SpotifyWebApi({
    clientId: "9cc5ff6476344775a9526ff70cf1d3e7",
})
const Lobby = (props) => {
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