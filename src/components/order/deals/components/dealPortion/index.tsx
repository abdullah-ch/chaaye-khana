import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import DealCard from './components/dealCard';
import MenuItemCard from './components/menuItem';

const styles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 3px 16px 0 rgba(0,0,0,0.15) !important',
        width: '70%',
        // '@global': {
        //     '*::-webkit-scrollbar': {
        //         width: '5px',
        //         height: '10px ',
        //     },
        //     '*::-webkit-scrollbar-thumb': {
        //         backgroundColor: 'red',
        //     },
        //     '*::-webkit-scrollbar-track-piece': {
        //         backgroundColor: 'black',
        //     },
        // },
    },
}));

const DealPortion: React.FC = () => {
    const classes = styles();

    const menuItem = (itemName: string, price: number) => {
        return { itemName, price };
    };

    const data = [
        menuItem('Pizza', 200),
        menuItem('Halwa Puri', 600),
        menuItem('JJ Wrap', 900),
        menuItem('DD Beef Burger', 950),
        menuItem('McChicken Crispy', 1000),
        menuItem('Chowmein', 500),
    ];
    return (
        <Grid item container direction='column' className={classes.container}>
            <DealCard />
            {data.map((item, i) => {
                return (
                    <MenuItemCard
                        key={i}
                        data={{ name: item.itemName, price: item.price }}
                    />
                );
            })}
        </Grid>
    );
};

export default DealPortion;
