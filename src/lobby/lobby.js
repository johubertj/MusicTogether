import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import useStyles from './styles';

let socket;
const Lobby = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = 'localhost:5000';

    //purpose -> run whenever lobby is rendered 
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        // console.log(name, room)

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, location.search]);

    const classes = useStyles();

    return (
        <div >
            {name}
            {room}
            hello world
        </div>
    )
}

export default Lobby;