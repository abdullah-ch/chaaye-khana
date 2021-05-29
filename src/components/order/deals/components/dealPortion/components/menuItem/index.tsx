import React from 'react';
import { makeStyles, Card, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { setOrderData } from '../../../billPortion/components/billPaper';

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
        cursor: 'pointer',
    },
    rightContentStyle: {
        display: 'flex',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: 'Comfortaa',
    },
}));

interface ItemsProps {
    name: string;
    price: number;
}

interface MenuItemCardProps {
    data: ItemsProps;
}

const MenuItemCard: React.FC<MenuItemCardProps> = (
    props: MenuItemCardProps
) => {
    const classes = styles();
    const {
        data: { name, price },
    } = props;

    return (
        <>
            <Card className={classes.root} variant='outlined'>
                <div className={classes.ContentStyle}>
                    <Typography
                        variant='h5'
                        classes={{ root: classes.textStyle }}
                    >
                        <b>{name}</b>
                    </Typography>
                    <div className={classes.rightContentStyle}>
                        <Typography
                            variant='h6'
                            classes={{ root: classes.textStyle }}
                        >
                            Rs {price}
                        </Typography>
                        <AddCircleIcon classes={{ root: classes.addIcon }} />
                    </div>
                </div>
            </Card>
        </>
    );
};

export default MenuItemCard;
