import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Header from './header';
import Deals from './deals';

const styles = makeStyles(() => ({
    root: {
        position: 'fixed',
        width: '85%',
        right: '7%',
        left: '7%',
    },
}));

const Order: React.FC = () => {
    const classes = styles();
    return (
        <>
            <Grid className={classes.root}>
                <Header />
                <Deals />
            </Grid>
        </>
    );
};

export default Order;
