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
        <div class="wrapper" >
            <div class = "content">
                <div class="split left">
                    <div class="title">
                        <Title />
                    </div>
                    <div class="centerDescription">
                        <p class="belowTitle" >Sing with your friends through Spotify! Click 'Create Room' to login with Spotify and host a room!</p>
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
            </div>
<<<<<<< HEAD
            

=======

            <div class="split right">
                <img class="rhsImg" src={logo} alt="Girl Img" />
            </div>

        
>>>>>>> c82f8a972c5b4ba29f794aa229d5943353942577
            <div class="footer">
                <p>Developed by Jacob Jo, Darian Chang, Andrew Ng</p>
            </div>
        </div>

        

    );

}

export default Home;