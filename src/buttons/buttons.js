import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const MyButton = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.centerBtns}>
            <Button style={{ marginTop: props.paddingTop }} className={classes.root} component={Link} to={props.linkTo} >{props.nameButton}</Button>
        </div >

    )
}

export default MyButton;