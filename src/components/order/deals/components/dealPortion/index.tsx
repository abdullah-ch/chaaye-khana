import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import DealCard from './dealCard';
import ItemCard from './itemCard';
import MenuItemCard from './menuItem';

const styles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '60%',
        height: '100%',
        backgroundColor: 'pink',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const DealPortion: React.FC = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Grid item container className={classes.container}>
                <DealCard />
                {/* <MenuItemCard /> */}
                {/*  <ItemCard />
                  <ItemCard />
                <ItemCard /> */}
            </Grid>
        </div>
    );
};

export default DealPortion;
