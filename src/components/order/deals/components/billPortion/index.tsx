import React from 'react';
import { makeStyles } from '@material-ui/core';
import BillPaper from './components/billPaper';

const styles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '25%',
        height: '50%',
        right: '8%',
    },
}));

const BillPortion: React.FC = () => {
    const classes = styles();
    return (
        <div className={classes.root}>
            <BillPaper />
        </div>
    );
};

export default BillPortion;
