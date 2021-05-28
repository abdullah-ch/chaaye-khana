import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import DealCard from './components/dealCard';
import MenuItemCard from './components/menuItem';

const styles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const DealPortion: React.FC = () => {
    const classes = styles();
    return (
        <Grid item container direction='column' className={classes.container}>
            <DealCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
        </Grid>
    );
};

export default DealPortion;
