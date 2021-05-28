import React from 'react';
import theme from './theme/theme';
import './theme/App.global.css';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import 'react-perfect-scrollbar/dist/css/styles.css';
import CheckoutPage from './pages/checkout';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/checkout' component={CheckoutPage} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
