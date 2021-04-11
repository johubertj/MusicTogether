import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MyButton from '../buttons/buttons';
import useStyles from './styles';

const Join = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div >
            <form noValidate autoComplete="off" className={classes.root}>
                <TextField id="outlined-basic" size="small" label="Your Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
            </form>
            <br />
            <form noValidate autoComplete="off" className={classes.root}>
                <TextField id="outlined-basic" size="small" label="Code" variant="outlined" onChange={(event) => setRoom(event.target.value)} />
            </form>

            <br />
            <MyButton onClick={e => (!name || !room) ? e.preventDefault() : null} linkTo={`/lobby?name=${name}&room=${room}`} nameButton="Join Room" paddingTop="10%" height="20px" width="40px" type="submit" />

        </div>
    )
}



export default Join;