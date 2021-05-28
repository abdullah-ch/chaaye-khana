import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        background: 'red',
    },
}));

const OrderDetails: React.FC = () => {
    const classes = styles();
    return <div>Orderdetails</div>;
};

export default OrderDetails;
