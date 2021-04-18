import React from 'react';
import Home from './home/home';
import createRoom from './createRoom/createRoom';
import Join from './join/join';
//import Lobby from './lobby/lobby';
//import Login from './login/login';
import LoginLobby from './loginLobby/loginLobby'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const code = new URLSearchParams(window.location.search).get("code")

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/createRoom" component={createRoom} />
                <Route path="/Join" component={Join} />
                <Route path="/loginLobby" component={LoginLobby} />
            </Switch>
        </Router>
    );
}

export default App;