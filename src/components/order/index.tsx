import React from 'react';
import { makeStyles } from '@material-ui/core';
import Slider from './slider';
import Deals from './deals';

const styles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '85%',
        height: '100%',
        top: '20%',
        right: '7%',
        left: '7%',
    },
}));

const Order: React.FC = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Slider />
            <Deals />
        </div>
    );
};

export default Order;
