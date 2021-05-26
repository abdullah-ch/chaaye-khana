import React from 'react';
import theme from './theme/theme';
import './theme/App.global.css';
import { ThemeProvider } from '@material-ui/styles';
import Order from './components/order';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Order />
        </ThemeProvider>
    );
};

export default App;
