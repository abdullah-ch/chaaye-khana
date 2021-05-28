import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    root: {
        position: 'fixed',
        width: '60%',
        height: '100%',
    },
}));

const BillingDetails: React.FC = () => {
    const classes = styles();
    return <div className={classes.root}>Billing details</div>;
};

export default BillingDetails;
