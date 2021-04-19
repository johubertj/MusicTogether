import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textdecoration: "none",
    },
    teamImg: {
        alignItems: "center",
        height: "250px",
        width: "auto",
        marginTop: "10%",
    },
    
    centerImg: {
        display: "flex",
        justifyContent: "center",
    }
}));
