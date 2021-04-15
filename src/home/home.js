import React from 'react';
import Title from '../title/title';
import MyButton from '../buttons/buttons';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Title />
                </div>
                <br></br>
                <div>
                    <MyButton nameButton="Create Room" paddingTop="10%" linkTo="../loginLobby/loginLobby.js" />

                    <MyButton nameButton="Join Room" paddingTop="5%" linkTo="../join/join.js" />
                </div>
            </div>
        );
    }
}

export default Home;