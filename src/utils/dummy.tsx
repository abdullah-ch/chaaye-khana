import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        background: 'red',
    },
    textStyle: {
        fontFamily: 'Comfortaa',
    },
}));

const dummy: React.FC = () => {
    const classes = styles();
    return (
        <div>
            <Typography variant='subtitle2' className={classes.textStyle}>
                Delivery
            </Typography>
        </div>
    );
};

export default dummy;
