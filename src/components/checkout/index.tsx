import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import BillingDetails from './components/billingDetails';

const styles = makeStyles(() => ({
    root: {
        position: 'fixed',
        width: '50%',
        height: '100%',
        top: '10%',
        right: '7%',
        left: '7%',
        marginTop: '3%',
    },
    position: {
        display: 'flex',
        flexDirection: 'row',
    },
    textStyle: {
        marginTop: '3.5%',
        marginLeft: '6.5%',
        fontFamily: 'Comfortaa',
        fontSize: '30px',
    },
}));

const Checkout: React.FC = () => {
    const classes = styles();
    return (
        <>
            <Typography variant='h1' classes={{ root: classes.textStyle }}>
                Checkout
            </Typography>
            <div className={classes.root}>
                <Grid className={classes.position}>
                    <BillingDetails />
                </Grid>
            </div>
        </>
    );
};

export default Checkout;
