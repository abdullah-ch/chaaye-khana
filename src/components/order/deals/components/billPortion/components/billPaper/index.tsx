import React from 'react';
import {
    makeStyles,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    Card,
} from '@material-ui/core';

import { Scrollbars } from 'react-custom-scrollbars';

const styles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        marginLeft: '10px',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    },
    menuItem: {
        width: '50%',
        fontFamily: 'Comfortaa',
    },
    price: {
        // may be for future use
    },
    billPortion: {
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #E3E3E3 ',
        marginTop: '30px',
        paddingBottom: '20px',
        fontFamily: 'Comfortaa',
    },

    orderItemsPortion: {
        width: '90%',
        borderLeft: '5px solid #E3E3E3 ',
        paddingLeft: '5px',
        marginBottom: '20px',
    },

    centralPrice: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#3a3a3a !important',
        fontSize: '18px',
        marginTop: '15px',
        fontFamily: 'Comfortaa',
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
            backgroundColor: '#3a3a3a',
        },
    },

    centerBtn: {
        display: 'flex',
        justifyContent: 'center',
    },
    formControl: {
        width: '80%',
        '&::selection': {
            border: ' 1px solid #66AFE9',
        },

        border: '1px solid black',
        borderRadius: '10px',
    },
    textPosition: { paddingLeft: '10px', fontFamily: 'Comfortaa' },
    textStyle: {
        fontFamily: 'Comfortaa',
    },
}));

//////////////////////////////////////////////////////

//////////////////////////////////////////////////
const BillPaper: React.FC = () => {
    const classes = styles();
    const [orderType, setOrderType] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOrderType(event.target.value as string);
    };

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
    const sum = () => {
        let sum = 0;
        data.forEach((item) => {
            sum += item.price;
        });
        return sum;
    };
    return (
        <>
            <Scrollbars
                autoHide
                // Hide delay in ms
                autoHideTimeout={1000}
                // Duration for hide animation in ms.
                autoHideDuration={200}
            >
                <Card className={classes.root}>
                    <div className={classes.title}>
                        <FormControl className={classes.formControl}>
                            <Select
                                // className={classes.selectText}

                                value={orderType}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{
                                    'aria-label': 'Without label',
                                }}
                            >
                                <MenuItem value=''>
                                    <Typography
                                        variant='subtitle2'
                                        className={classes.textPosition}
                                    >
                                        Delivery
                                    </Typography>
                                </MenuItem>

                                <MenuItem value={20}>
                                    <Typography
                                        variant='subtitle2'
                                        className={classes.textPosition}
                                    >
                                        PickUp
                                    </Typography>
                                </MenuItem>
                            </Select>
                        </FormControl>{' '}
                    </div>
                    <div className={classes.title}>
                        <Typography
                            variant='h4'
                            classes={{ root: classes.textStyle }}
                        >
                            Your Order
                        </Typography>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////// */}
                    {data.map((item, i) => {
                        return (
                            <div key={i} className={classes.billPortion}>
                                <div className={classes.menuItem}>
                                    <Typography
                                        variant='h6'
                                        classes={{ root: classes.textStyle }}
                                    >
                                        {item.itemName}
                                    </Typography>
                                </div>

                                <div className={classes.price}>
                                    <Typography
                                        variant='h6'
                                        classes={{ root: classes.textStyle }}
                                    >
                                        Rs {item.price}(incl. tax)
                                    </Typography>
                                </div>
                            </div>
                        );
                    })}

                    {/* ////////////////////////////////////////////////////////////////////// */}
                    <div className={classes.centralPrice}>
                        <div className={classes.leftPrice}>
                            <b>Subtotal:</b>
                        </div>
                        <div className={classes.rightPrice}>
                            <b>Rs {sum()}(incl. tax)</b>
                        </div>
                    </div>
                    <div className={classes.centerBtn}>
                        <Button
                            classes={{ root: classes.btn }}
                            onClick={() => {
                                return (window.location.href = '/checkout');
                            }}
                        >
                            Go To Checkout
                        </Button>
                    </div>
                </Card>
            </Scrollbars>
        </>
    );
};

export default BillPaper;
