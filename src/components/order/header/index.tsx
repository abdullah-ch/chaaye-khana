import React from 'react';
import { makeStyles, AppBar, Tabs, Tab } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    container: {
        width: 'inherit',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
    },
    appBar: {
        backgroundColor: 'black',
        fontFamily: 'Comfortaa !important',
        color: 'white',
    },

    indicator: {
        backgroundColor: theme.palette.primary.dark,
        height: '10%',
        marginBottom: '5px',
        fontFamily: 'Comfortaa !important',
    },
    textStyle: {
        fontFamily: 'Comfortaa !important',
    },
}));

const Header: React.FC = () => {
    ////////////////////////////////////////////////////
    const items = [
        'Pita',
        'Wrap',
        'Plate',
        'Deserts',
        'Beverages',
        'Merch',
        'BBQ',
    ];
    ////////////////////////////////////////////////////
    const classes = styles();
    const [value, setValue] = React.useState(0);

    const handleChange = (
        event: React.ChangeEvent<unknown>,
        newValue: number
    ) => {
        setValue(newValue);
    };

    return (
        <div className={classes.container}>
            <div className={classes.appBar}>
                <AppBar position='static' className={classes.appBar}>
                    <Tabs
                        value={value}
                        classes={{
                            indicator: classes.indicator,
                            flexContainer: classes.textStyle,
                        }}
                        onChange={handleChange}
                        aria-label='simple tabs example'
                    >
                        {items.map((item, i) => (
                            <Tab key={i} label={item} />
                        ))}
                    </Tabs>
                </AppBar>
            </div>
        </div>
    );
};

export default Header;
