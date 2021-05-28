import React from 'react';
import {
    makeStyles,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
} from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = makeStyles((theme) => ({
    root: {},
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    },
    menuItem: {
        width: '70%',
        marginTop: '20px',
        marginBottom: '15px',
    },
    billPortion: {
        marginLeft: '10px',
    },

    orderItemsPortion: {
        width: '90%',
        borderLeft: '5px solid #E3E3E3 ',
        paddingLeft: '5px',
        marginBottom: '20px',
    },

    price: {
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottom: '1px solid #E3E3E3 ',
        marginTop: '20px',
    },
    centralPrice: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#3a3a3a !important',
        fontSize: '18px',
        marginTop: '15px',
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
    textPosition: { paddingLeft: '10px' },
}));
// #E3E3E3 line break
const BillPaper: React.FC = () => {
    const classes = styles();
    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    return (
        <>
            <Scrollbars>
                <div className={classes.title}>
                    <FormControl className={classes.formControl}>
                        <Select
                            // className={classes.selectText}

                            value={age}
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
                    {/* ///////////////////////////////////////// */}
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
                    {/* ////////////////////////////////////////// */}
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
            </Scrollbars>
        </>
    );
};

export default BillPaper;
