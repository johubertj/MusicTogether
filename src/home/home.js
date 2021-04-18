import React from 'react';
import Title from '../title/title';
import MyButton from '../buttons/buttons';
import './styles.css'; 

class Home extends React.Component {

    render() {
        return (
            <div class="body">
                <div class="banner">
                    <div class="title">
                        <img src="../images/pngwing.com.png" alt="Golden frame"/>
                        <Title />
                    </div>
                    <div>
                        <h3 class="belowTitle" id="firstBelow">Join for free. Join anywhere</h3>
                        <p class="belowTitle" id="secBelow">Listen to music through Spotify! Click 'Create' to open a room, click 'Join' to join one!</p>
                    </div>

                    <div class="btns">
                        <MyButton nameButton="Create Room" paddingTop="2%" linkTo="../loginLobby/loginLobby.js" />

                        <MyButton nameButton="Join Room" paddingTop="1%" linkTo="../join/join.js" />
                    </div>

                </div>
                <br></br>
                    
                <div>
                </div>

                {/* <div class="scroll">
                    <h1>Hello</h1>
                </div> */}
                <footer class="footer">
                    <p>Copyright &copy; 2021 MusicTogether by Team League</p>
                </footer>
            </div>
        );
    }
}

export default Home;