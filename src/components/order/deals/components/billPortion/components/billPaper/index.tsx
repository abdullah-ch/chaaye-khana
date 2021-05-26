import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {},
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
    },
    menuItem: {
        width: '60%',
        marginTop: '20px',
        marginBottom: '10px',
    },
    billPortion: {
        marginLeft: '10px',
    },

    orderItemsPortion: {
        width: '70%',
        borderLeft: '5px solid #E3E3E3 ',
        paddingLeft: '5px',
    },

    price: {
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottom: '1px solid #E3E3E3 ',
    },
    centralPrice: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#3a3a3a !important',
        fontSize: '18px',
        marginTop: '10px',
    },

    leftPrice: {
        justifyContent: 'flex-start',
    },
    rightPrice: {
        justifyContent: 'flex-end',
    },
    btn: {
        marginTop: '20px',
        backgroundColor: theme.palette.primary.dark,
        fontSize: '15px',
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },

    centerBtn: {
        display: 'flex',
        justifyContent: 'center',
    },
}));
// #E3E3E3 line break
const BillPaper: React.FC = () => {
    const classes = styles();
    return (
        <>
            <div className={classes.title}>
                <Typography variant='h4'>Your Order</Typography>
            </div>

            <div className={classes.billPortion}>
                <div className={classes.menuItem}>
                    <Typography variant='h6'>
                        1 x 2 Pizzas + 2 Free Drinks
                    </Typography>
                </div>
                <div className={classes.orderItemsPortion}>
                    <div>
                        <Typography variant='h5'>
                            <b>Promotion Pizza 1: </b>
                            Margaritta
                        </Typography>
                    </div>
                    <br />
                    <div>
                        <Typography variant='h5'>
                            <b>Promotion Pizza 2: </b>
                            Chicken and Jalepenos
                        </Typography>
                    </div>
                </div>
                <div className={classes.price}>
                    <Typography variant='h6'>Rs 1935(incl. tax)</Typography>
                </div>
                <div className={classes.centralPrice}>
                    <div className={classes.leftPrice}>
                        <b>Subtotal:</b>
                    </div>
                    <div className={classes.rightPrice}>
                        <b>Rs 1935(incl. tax)</b>
                    </div>
                </div>
                <div className={classes.centerBtn}>
                    <Button classes={{ root: classes.btn }}>
                        Go To Checkout
                    </Button>
                </div>
            </div>
        </>
    );
};

export default BillPaper;
