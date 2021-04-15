import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios
            .post("http://localhost:3001/loginLobby/loginLobby.js", {
                code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                // window.history.pushState({}, "/loginLobby/loginLobby.js")
            })
            .catch((error) => {
                window.location = "/loginLobby/loginLobby.js"
            })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            
            axios
                .post("http://localhost:3001/refresh", {
                    refreshToken,
                })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                })
                .catch(() => {
                    window.location = "/loginLobby/loginLobby.js"
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}