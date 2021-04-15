import React from 'react'
import Lobby from "../lobby/lobby"
import Login from "../login/login"

const code = new URLSearchParams(window.location.search).get('code')

export default function LoginLobby() {
    return code ? <Lobby code={code} /> : <Login />
}
