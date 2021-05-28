import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
// import Slider from './slider';
import Deals from './deals';

const styles = makeStyles(() => ({
    root: {
        position: 'fixed',
        width: '85%',
        top: '20%',
        right: '7%',
        left: '7%',
    },
}));

const Order: React.FC = () => {
    const classes = styles();
    return (
        <Grid className={classes.root}>
            {/* <Slider /> */}
            <Deals />
        </Grid>
    );
};

export default Order;
