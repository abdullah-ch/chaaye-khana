import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    //dummy colors
    palette: {
        primary: {
            main: '#FFFFFF',
            dark: '#F15A29', // orange
            light: '#808285', // light grey
            contrastText: '#484e55',
        },
        secondary: {
            main: '#4dedff', // card bottom border color
            dark: '#0dfc00', // card bottom hover border color
            light: '#696463', // border
            contrastText: '#1BA1E2', // blue color
        },
        success: {
            main: '#01BC85',
            light: '#595E57', // border color
            contrastText: '#464646', // scroll bar color product
        },
        error: {
            main: '#B85655',
        },
    },
    typography: {
        h2: { color: '#fff', fontSize: '30px' },
        body1: { color: '#fff', fontSize: '1.6em' },
        body2: {
            fontSize: '1.5em',
            color: '#3a3a3a !important',
            fontWeight: 700,
        },
        h1: { fontSize: '30px', color: '#3a3a3a !important' },
        h3: {
            fontSize: '18px',
            color: '#3a3a3a !important',
            fontFamily: 'Comfortaa Times New Roman',
        },
        h5: { fontSize: '1em', color: 'black' },
        h6: {
            fontSize: '16px',
            color: '#3a3a3a !important',
            fontFamily: 'Comfortaa Times New Roman',
        },
        h4: {
            fontSize: '21px',
            color: '#3a3a3a !important',
            fontFamily: 'Comfortaa Times New Roman',
        },
        subtitle1: {
            fontSize: '20px',
            color: '#808285 !important',
            fontWeight: 700,
        },
        subtitle2: {
            fontSize: '15px',
            color: '#666666 !important',
            fontFamily: 'Comfortaa display',
        },
    },
    overrides: {
        MuiInput: {
            underline: {
                '&&&:before': {
                    borderBottom: 'none',
                },
                '&&:after': {
                    borderBottom: 'none',
                },
            },
        },
        MuiDialog: {
            paper: {
                backgroundColor: '#252525',
                color: 'white',
            },
        },
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
                MuiInput: {
                    padding: '20px',
                    input: {
                        color: '#fff !important',
                    },
                },
            },
        },
        MuiTableCell: {
            root: {
                padding: '0px 10px',
                fontSize: '13px',
                borderBlockColor: 'rgba(255,255,255,0.4)',
            },
            head: {
                fontSize: '16px',
                fontWeight: 600,
                padding: '16px !important',
            },
        },
        MuiPaper: {
            rounded: {
                borderRadius: 0,
            },
        },
    },
});
export default theme;
