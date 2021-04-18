import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MyButton from '../buttons/buttons';
import useStyles from './styles';

const CreateRoom = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    
    return (
        <div >
            <br />
            <form noValidate autoComplete="off" className={classes.root}>
                <TextField id="outlined-basic" size="small" label="Your Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
            </form>
            <br />
            <MyButton nameButton="Generate Room" paddingTop="10%" height="20px" width="40px" linkTo="../lobby/lobby.js" />


        </div>
    )
}



export default CreateRoom;