import React from 'react';
import { makeStyles } from '@material-ui/core';
import BillingDetails from './components/billingDetails';
import OrderDetails from './components/orderDetails';

const styles = makeStyles((theme) => ({
    root: {
        background: 'red',
    },
}));

const Checkout: React.FC = () => {
    const classes = styles();
    return (
        <div>
            <BillingDetails />
            <OrderDetails />
        </div>
    );
};

export default Checkout;
