import React from 'react';
import { makeStyles, Card, Typography } from '@material-ui/core';
import margaritaImage from '../../../../../../assets/Margerita.jpg';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        height: '10%',
        position: 'fixed',
        justifyContent: 'space-between',
        '&:hover': {
            boxShadow: '0 3px 16px 0 rgb(0 0 0 / 11%)',
        },
        borderBottom: '1px dashed #ddd',
    },

    leftContentStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0px 10px',
    },
    imgStyle: {
        maxWidth: '4em !important',
        marginRight: '1em',
    },
    addIcon: {
        color: theme.palette.primary.dark,
        fontSize: '2.3em',
        margin: '0px 10px',
    },
    rightContentStyle: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

const ItemCard: React.FC = () => {
    const classes = styles();

    return (
        <Card className={classes.root} variant='outlined'>
            <div className={classes.leftContentStyle}>
                <img className={classes.imgStyle} src={margaritaImage} />
                <Typography variant='h5'>
                    <b>2 Pizzas + 2 Free Drinks</b>
                </Typography>
            </div>
            <div className={classes.rightContentStyle}>
                <Typography variant='h6'>Rs 1,700 - Rs 1900</Typography>
                <AddCircleIcon classes={{ root: classes.addIcon }} />
            </div>
        </Card>
    );
};

export default ItemCard;
