import React from 'react';
import Title from '../title/title';
import MyButton from '../buttons/buttons';
import './styles.css'; 
import logo from '../images/girl.svg';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div class ="split left">
                    <div class="title">
                        <Title />
                    </div>
                    <div>
                        <p class="belowTitle" id="secBelow">Sing with your friends through Spotify! Click 'Create' to open a room, click 'Join' to join one!</p>
                    </div>

                    <div class="btns">
                        <MyButton nameButton="Create Room" paddingTop="15%" linkTo="../loginLobby/loginLobby.js" />

                        <MyButton nameButton="Join Room" paddingTop="1%" linkTo="../join/join.js" />
                    </div>
                </div>

                <div class = "split right">
                    <img class = "rhsImg" src={logo} alt="Girl img" />;
                </div>
            </div>
        );
    }
}

export default Home;