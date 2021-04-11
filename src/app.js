import React from 'react';
import Home from './home/home';
import createRoom from './createRoom/createRoom';
import Join from './join/join';
import Lobby from './lobby/lobby';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/createRoom" component={createRoom} />
                <Route path="/Join" component={Join} />
                <Route path="/Lobby" component={Lobby} />
            </Switch>
        </Router>
    );
}

export default App;