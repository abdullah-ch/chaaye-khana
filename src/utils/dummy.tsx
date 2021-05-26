import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    root: {
        background: 'red',
    },
}));

const dummy: React.FC = () => {
    const classes = styles();
    return <div></div>;
};

export default dummy;
