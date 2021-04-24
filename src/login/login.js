import React from "react"
import logo from '../images/login3.svg';
import Button from '@material-ui/core/Button';
import './styles.css';

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=9cc5ff6476344775a9526ff70cf1d3e7&response_type=code&redirect_uri=http://localhost/loginLobby/loginLobby.js&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {

    return (
        <div class="entirePage" >
            <div class="centerImg">
                <img class="teamImg" src={logo} alt="Team Img" />
            </div>

            <div class="centerBtns">
                <Button style={{ fontSize: "13px", background: "#F2C4CE", color: "black", maxWidth: '175px', maxHeight: '50px', minWidth: '175px', minHeight: '45px' }} href={AUTH_URL} variant="contained" color="#F2C4CE">
                    <p>Spotify Login</p>
                </Button>
            </div>
        </div>
    )
}