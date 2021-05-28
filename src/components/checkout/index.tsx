import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import BillingDetails from './components/billingDetails';

const styles = makeStyles(() => ({
    root: {
        // background: 'red',
        position: 'fixed',
        width: '85%',
        height: '100%',
        top: '20%',
        right: '7%',
        left: '7%',
    },
    position: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

const Checkout: React.FC = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Grid className={classes.position}>
                <BillingDetails />
            </Grid>
        </div>
    );
};

export default Checkout;
