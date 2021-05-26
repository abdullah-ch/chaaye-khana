import React from 'react';
import { makeStyles, Paper, Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const styles = makeStyles((theme) => ({
    container: {
        width: 'inherit',
        height: '120px',
        position: 'fixed',
        backgroundColor: 'gold',
    },
    root: {
        width: '70%',
        background: 'gold',
        position: 'fixed',
    },
}));

const Slider: React.FC = () => {
    ////////////////////////////////////////////////////
    const items = [
        {
            name: 'Random Name #2',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #3',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #4',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #5',
            description: 'Probably the most random thing you have ever seen!',
        },
        {
            name: 'Random Name #6',
            description: 'Probably the most random thing you have ever seen!',
        },
    ];
    ////////////////////////////////////////////////////

    const classes = styles();
    return (
        <div className={classes.container}>
            <Carousel
                fullHeightHover={false}
                stopAutoPlayOnHover={true}
                indicators={true}
            >
                {/* {items.map((item, key) => {
                    return (
                        <Paper key={key} classes={{ root: classes.root }}>
                            <h2>{item.name}</h2>
                        </Paper>
                    );
                })} */}
            </Carousel>
        </div>
    );
};

export default Slider;
