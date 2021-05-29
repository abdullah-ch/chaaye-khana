import React from 'react';
import { makeStyles, Card, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        minHeight: '70px',
        justifyContent: 'space-between',
        '&:hover': {
            boxShadow: '0 3px 16px 0 rgb(0 0 0 / 11%)',
        },
        borderBottom: '1px dashed #ddd',
        borderTop: 'none',
    },

    ContentStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0px 10px',
        width: '100%',
    },

    addIcon: {
        color: theme.palette.primary.dark,
        fontSize: '2.3em',
        margin: '0px 10px',
    },
    rightContentStyle: {
        display: 'flex',
        alignItems: 'center',
    },
}));

// interface ItemsProps {
//     name: string;
//     price: number;
// }

// interface MenuItemCardProps {
//     data: ItemsProps;
// }

const MenuItemCard: React.FC = () => {
    const classes = styles();

    return (
        <>
            <Card className={classes.root} variant='outlined'>
                <div className={classes.ContentStyle}>
                    <Typography variant='h5'>
                        <b>2 Pizzas + 2 Free Drinks</b>
                    </Typography>
                    <div className={classes.rightContentStyle}>
                        <Typography variant='h6'>Rs 1,700 - Rs 1900</Typography>
                        <AddCircleIcon classes={{ root: classes.addIcon }} />
                    </div>
                </div>
            </Card>
        </>
    );
};

export default MenuItemCard;
