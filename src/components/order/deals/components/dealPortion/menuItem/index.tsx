import React, { useState } from 'react';
import {
    makeStyles,
    withStyles,
    Dialog,
    DialogActions,
    DialogContent as div,
    DialogTitle,
    Typography,
    FormControl,
    InputLabel,
    Select,
    Button,
    MenuItem,
    TextField,
} from '@material-ui/core';
import ItemCard from '../itemCard';
import CloseIcon from '@material-ui/icons/Close';
import margaritaImage from '../../../../../../assets/Margerita.jpg';

const styles = makeStyles((theme) => ({
    root: {
        margin: '10px 25px',
    },
    container: {
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        display: 'flex',
        justifyContent: 'flex-end',
        borderBottom: '1px solid #e5e5e5',
    },
    closeIcon: {
        color: theme.palette.primary.light,
        fontSize: '2.5em',
        '&:hover': {
            color: 'black',
        },
    },
    sale: {
        fontFamily: 'Comfortaa, display',
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '100%',
        fontSize: '1.2rem',
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imgStyle: {
        maxWidth: '70%',
        marginRight: '1em',
    },
    imageWrapper: {
        // marginRight: '1em',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    priceWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        maxWidth: '70%',
    },
    formControl: {
        backgroundColor: '#FAFAFA',
        width: '100%',
    },
    dropDownItems: { marginBottom: '35px' },
    btn: {
        backgroundColor: theme.palette.primary.dark,
        fontSize: '15px',
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },

        marginLeft: '20px',
    },

    lowerContentPortion: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectText: {
        // paddingLeft: '10px',
    },
    TextField: {
        width: '10%',
        underline: {
            '&&&:before': {
                borderBottom: 'none !important',
            },
            '&&:after': {
                borderBottom: 'none !important',
            },
        },
        '&:hover': {},
    },

    footer: {
        borderTop: '1px solid #e5e5e5',
        marginTop: '10px',
    },
}));

const MenuItemCard: React.FC = () => {
    const classes = styles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [age, setAge] = React.useState('');
    const [number, setNumber] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <div onClick={handleClickOpen}>
                <ItemCard />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
                classes={{ paper: classes.container }}
            >
                {/* Header */}
                <DialogTitle className={classes.title}>
                    <CloseIcon
                        onClick={handleClose}
                        classes={{ root: classes.closeIcon }}
                    />
                </DialogTitle>
                {/* Main - should use material ui grid here */}
                <div className={classes.root}>
                    <Typography variant='h5'>
                        <b className={classes.sale}>Sale!</b>
                    </Typography>
                    <div className={classes.main}>
                        <Typography variant='h1'>
                            2 Pizzas + 2 Free Drinks
                        </Typography>

                        <span className={classes.imageWrapper}>
                            <img
                                className={classes.imgStyle}
                                src={margaritaImage}
                            />
                        </span>
                        <span className={classes.priceWrapper}>
                            <Typography variant='body2'>
                                Rs 1,700 - Rs 1900
                            </Typography>
                        </span>
                    </div>
                    <div>
                        <div className={classes.dropDownItems}>
                            <div>
                                <Typography variant='subtitle1'>
                                    Promo Pizza 1
                                </Typography>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        className={classes.selectText}
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                    >
                                        <MenuItem value=''>
                                            <Typography variant='subtitle2'>
                                                Choose an Option
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem value={10}>
                                            <Typography variant='subtitle2'>
                                                Promo Pizza 1
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem value={20}>
                                            <Typography variant='subtitle2'>
                                                Promo Pizza 1
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            <Typography variant='subtitle2'>
                                                Promo Pizza 1
                                            </Typography>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <Typography variant='subtitle1'>
                                    Promo Pizza 2
                                </Typography>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{
                                            'aria-label': 'Without label',
                                        }}
                                    >
                                        <MenuItem value=''>
                                            <Typography variant='subtitle2'>
                                                Choose an Option
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem value={10}>
                                            <Typography variant='subtitle2'>
                                                Promo Pizza 1
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem value={20}>
                                            <Typography variant='subtitle2'>
                                                Promo Pizza 1
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            <Typography variant='subtitle2'>
                                                Promo Pizza 1
                                            </Typography>
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className={classes.lowerContentPortion}>
                            <TextField
                                type='number'
                                classes={{ root: classes.TextField }}
                                value={number}
                                placeholder='0'
                                onChange={() => {
                                    return setNumber(number + 1);
                                }}
                            />
                            <Button classes={{ root: classes.btn }}>
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <DialogActions className={classes.footer}>
                    <Button classes={{ root: classes.btn }}>Add To Cart</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default MenuItemCard;
