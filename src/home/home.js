import React from 'react';
import Title from '../title/title';
import './styles.css';
import logo from '../images/girl.svg';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
//import useMediaQuery from '@material-ui/core/useMediaQuery';



const Home = (props) => {
    //const isActive = useMediaQuery("(min-width: 900px)")
    return (
        <div>
            <div class="split left">
                <div class="title">
                    <Title />
                </div>
                <div class="centerDescription">
                    <p class="belowTitle" >Sing with your friends through Spotify! Click 'Create' to open a room, click 'Join' to join one!</p>
                </div>

                <div class="btns btnOne">
                    <Button style={{ fontSize: "13px", background: "#F2C4CE", color: "black", maxWidth: '175px', maxHeight: '50px', minWidth: '175px', minHeight: '45px' }} component={Link} to="../loginLobby/loginLobby.js" variant="contained" color="#F2C4CE">
                        <p>Create Room</p>
                    </Button>
                </div>

                <div class="btns btnTwo">
                    <Button style={{ fontSize: "13px", background: "#F2C4CE", color: "black", maxWidth: '175px', maxHeight: '50px', minWidth: '175px', minHeight: '45px' }} component={Link} to="../join/join.js" variant="contained" color='#F2C4CE'>
                        <p>Join Room</p>
                    </Button>
                </div>
            </div>

            <div class="split right">
                <img class="rhsImg" src={logo} alt="Girl Img" />
            </div>


            <div class="footer">
                <p>Developed by Jacob Jo, Darian Chang, Andrew Ng</p>
                
            </div>
        </div>
    );

}

export default Home;