import React from 'react';
import { makeStyles } from '@material-ui/core';
import DealPortion from './components/dealPortion';
import BillPortion from './components/billPortion';

const styles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '85%',
        height: '100%',
        top: 'calc(20% + 120px)',
    },
}));

const Deals: React.FC = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <DealPortion />
            <BillPortion />
        </div>
    );
};

export default Deals;
