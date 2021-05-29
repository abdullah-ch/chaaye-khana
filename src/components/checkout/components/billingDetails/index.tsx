import React from 'react';
import { makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import { useFormik } from 'formik';
import * as yup from 'yup';

const styles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '40%',
        height: '100%',
    },
    textStyle: {
        fontFamily: 'Comfortaa',
        borderBottom: '1px solid #E3E3E3 ',
        paddingBottom: '20px',
    },

    text: {
        fontFamily: 'Comfortaa',
        color: '#3a3a3a !important',
    },

    textField: {
        display: 'flex',
        width: '100%',
        border: '1px solid #E3E3E3',
        flexShrink: 2,
    },
    spacingName: {
        marginTop: '1.5rem',
    },
    positionName: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textFieldStreet: {
        border: '1px solid #E3E3E3',
    },

    typedFont: {
        fontFamily: 'Comfortaa',
        fontSize: '15px',
        paddingLeft: '10px',
    },
    spacingOtherAddress: {
        marginTop: '1rem',
    },

    btn: {
        marginTop: '30px',
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        '&:hover': {
            backgroundColor: '#3a3a3a',
        },
        width: '50%',
        fontSize: '16px',
    },

    centerBtn: {
        display: 'flex',
        justifyContent: 'center',
    },
}));
const validationSchema = yup.object({
    firstName: yup
        .string()
        .min(2, 'First Name should be of minimum 2 characters length')
        .required('First Name is required'),
    secondName: yup
        .string()
        .min(2, 'Second should be of minimum 2 characters length')
        .required('Second Name is required'),
    streetAddress: yup
        .string()
        .min(2, 'Address should be of minimum 3 characters length')
        .required('Address is required'),
    otherAddress: yup
        .string()
        .min(2, 'Address should be of minimum 3 characters length'),
    phoneNumber: yup
        .number()
        .min(2, 'Number should be of minimum 3 number length')
        .required('number is required'),

    email: yup.string().email().required('email is required'),
});
const BillingDetails: React.FC = () => {
    const classes = styles();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            streetAddress: '',
            phoneNumber: null,
            email: '',
            otherAddress: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // set values here setProducts
            console.log(values);
        },
    });
    return (
        <Scrollbars
            autoHide
            // Hide delay in ms
            autoHideTimeout={1000}
            // Duration for hide animation in ms.
            autoHideDuration={200}
        >
            <div className={classes.root}>
                <Typography variant='h3' classes={{ root: classes.textStyle }}>
                    Billing Details
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    {/* should encapsulate First Name and Second Name */}
                    <div className={classes.positionName}>
                        <div className={classes.spacingName}>
                            <Typography
                                variant='h6'
                                classes={{ root: classes.text }}
                            >
                                <b>First Name</b>
                            </Typography>

                            <TextField
                                required
                                id='firstName'
                                name='firstName'
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.firstName &&
                                    Boolean(formik.errors.firstName)
                                }
                                helperText={
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                }
                                InputProps={{ className: classes.textField }}
                                inputProps={{ className: classes.typedFont }}
                                fullWidth
                            />
                        </div>

                        <div className={classes.spacingName}>
                            <Typography
                                variant='h6'
                                classes={{ root: classes.text }}
                            >
                                <b>Second Name</b>
                            </Typography>

                            <TextField
                                required
                                id='secondName'
                                name='secondName'
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.secondName &&
                                    Boolean(formik.errors.secondName)
                                }
                                helperText={
                                    formik.touched.secondName &&
                                    formik.errors.secondName
                                }
                                InputProps={{ className: classes.textField }}
                                inputProps={{ className: classes.typedFont }}
                                fullWidth
                            />
                        </div>
                    </div>
                    {/* Street Address */}
                    <div className={classes.spacingName}>
                        <Typography
                            variant='h6'
                            classes={{ root: classes.text }}
                        >
                            <b>Street Address</b>
                        </Typography>

                        <TextField
                            required
                            id='streetAddress'
                            name='streetAddress'
                            placeholder='House number and street name'
                            onChange={formik.handleChange}
                            error={
                                formik.touched.streetAddress &&
                                Boolean(formik.errors.streetAddress)
                            }
                            helperText={
                                formik.touched.streetAddress &&
                                formik.errors.streetAddress
                            }
                            fullWidth
                            InputProps={{ className: classes.textFieldStreet }}
                            inputProps={{ className: classes.typedFont }}
                        />
                    </div>
                    {/* Apartment Address */}
                    <div className={classes.spacingOtherAddress}>
                        <TextField
                            id='streetAddress'
                            name='streetAddress'
                            placeholder='Apartment, suite, unit, etc.(optional)'
                            onChange={formik.handleChange}
                            error={
                                formik.touched.streetAddress &&
                                Boolean(formik.errors.streetAddress)
                            }
                            helperText={
                                formik.touched.streetAddress &&
                                formik.errors.streetAddress
                            }
                            fullWidth
                            InputProps={{ className: classes.textFieldStreet }}
                            inputProps={{ className: classes.typedFont }}
                        />
                    </div>
                    {/* Phone */}
                    <div className={classes.spacingName}>
                        <Typography
                            variant='h6'
                            classes={{ root: classes.text }}
                        >
                            <b>Phone</b>
                        </Typography>

                        <TextField
                            required
                            id='phoneNumber'
                            name='phoneNumber'
                            onChange={formik.handleChange}
                            error={
                                formik.touched.phoneNumber &&
                                Boolean(formik.errors.phoneNumber)
                            }
                            helperText={
                                formik.touched.phoneNumber &&
                                formik.errors.phoneNumber
                            }
                            fullWidth
                            InputProps={{ className: classes.textFieldStreet }}
                            inputProps={{ className: classes.typedFont }}
                        />
                    </div>
                    {/* email */}
                    <div className={classes.spacingName}>
                        <Typography
                            variant='h6'
                            classes={{ root: classes.text }}
                        >
                            <b>Email Address</b>
                        </Typography>
                        <TextField
                            required
                            id='phoneNumber'
                            name='phoneNumber'
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                            fullWidth
                            InputProps={{ className: classes.textFieldStreet }}
                            inputProps={{ className: classes.typedFont }}
                        />
                    </div>
                    {/* Button */}
                    <div className={classes.centerBtn}>
                        <Button className={classes.btn} type='submit'>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </Scrollbars>
    );
};

export default BillingDetails;
