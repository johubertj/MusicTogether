import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        background: 'linear-gradient(45deg, #0000FF 30%, #7B00F7 90%)',
        //background: 'blue',0000FF FE6B8B 0070FF
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 48,
        padding: '0 30px',
        color: 'white',
    },
    centerBtns: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: 'white',
    }
}));


