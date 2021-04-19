import React from 'react';
import Title from '../title/title';
import './styles.css';
import logo from '../images/girl.svg';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Home = (props) => {
    return (
        <div class="wrapper" >
            <Grid container>
                <Grid item xs={12} md={6}>
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
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <img class="rhsImg" src={logo} alt="Girl Img" />
                </Grid>

                <Grid item class="footer" xs={12}>
                    <p>Developed by Jacob Jo, Darian Chang, Andrew Ng</p>
                </Grid>
            </Grid>


        </div>

        

    );

}

export default Home;