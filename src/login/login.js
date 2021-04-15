import React from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=9cc5ff6476344775a9526ff70cf1d3e7&response_type=code&redirect_uri=http://localhost:3000/loginLobby/loginLobby.js&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        }, 
        centerBtns: {
            display: "flex",
            justifyContent: "center",
            paddingTop: "20%"
        },
        styleBtn:{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'black',
            height: 48,
            padding: '0 30px',
        }
    }),
);

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.centerBtns}>
            <Button size="small" className={classes.styleBtn} variant="contained" href={AUTH_URL}>
                Spotify Login
            </Button>
        </div>
        
    )
}