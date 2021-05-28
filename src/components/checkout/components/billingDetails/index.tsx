import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        background: 'red',
    },
}));

const BillingDetails: React.FC = () => {
    const classes = styles();
    return <div>Billing details</div>;
};

export default BillingDetails;
