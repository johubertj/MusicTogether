import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri }) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return (
        <SpotifyPlayer styles={{
            activeColor: '#111',
            bgColor: '#F9F7F1',
            color: '#111',
            loaderColor: '#111',
            sliderColor: '#F2C4CE',
            trackArtistColor: '#676461',
            trackNameColor: '#111',
        }}
            token={accessToken}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
        />
    )
}