import React from 'react';
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ItemCard from '../itemCard';

const styles = makeStyles((theme) => ({
    root: {
        width: '60%',
        position: 'fixed',
        height: '10%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    bullet: {
        color: `${theme.palette.primary.dark} !important`,
        fontSize: '1em',
    },
    contentStyle: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const DealCard: React.FC = () => {
    const classes = styles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root} variant='outlined'>
            <div className={classes.contentStyle}>
                <FiberManualRecordIcon classes={{ root: classes.bullet }} />
                <FiberManualRecordIcon classes={{ root: classes.bullet }} />
                <FiberManualRecordIcon classes={{ root: classes.bullet }} />
                <Typography variant='body1'>Deals</Typography>
                <FiberManualRecordIcon classes={{ root: classes.bullet }} />
                <FiberManualRecordIcon classes={{ root: classes.bullet }} />
                <FiberManualRecordIcon classes={{ root: classes.bullet }} />
            </div>
        </Card>
    );
};

export default DealCard;
