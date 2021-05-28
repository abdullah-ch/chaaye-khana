import React from 'react';
import { makeStyles, Card, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const styles = makeStyles((theme) => ({
    root: {
        width: '70%',
        minHeight: '70px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderBottom: 'none',
    },
    bullet: {
        color: `${theme.palette.primary.dark} !important`,
        fontSize: '1em',
    },
}));

const DealCard: React.FC = () => {
    const classes = styles();

    return (
        <Card className={classes.root} variant='outlined'>
            <FiberManualRecordIcon classes={{ root: classes.bullet }} />
            <FiberManualRecordIcon classes={{ root: classes.bullet }} />
            <FiberManualRecordIcon classes={{ root: classes.bullet }} />
            <Typography variant='body1'>Deals</Typography>
            <FiberManualRecordIcon classes={{ root: classes.bullet }} />
            <FiberManualRecordIcon classes={{ root: classes.bullet }} />
            <FiberManualRecordIcon classes={{ root: classes.bullet }} />
        </Card>
    );
};

export default DealCard;
