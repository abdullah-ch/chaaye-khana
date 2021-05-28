import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import DealPortion from './components/dealPortion';
import BillPortion from './components/billPortion';

const styles = makeStyles(() => ({
    root: {
        position: 'fixed',
        width: '85%',
        top: 'calc(20% + 120px)',
    },
}));

const Deals: React.FC = () => {
    const classes = styles();
    return (
        <Grid item container className={classes.root}>
            <DealPortion />
            <BillPortion />
        </Grid>
    );
};

export default Deals;
