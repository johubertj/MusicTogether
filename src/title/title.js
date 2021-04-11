import React from 'react';
import useStyles from './styles';

const Title = () => {
    const classes = useStyles();

    return <div className={classes.root}>MusicTogether</div>
}

export default Title;