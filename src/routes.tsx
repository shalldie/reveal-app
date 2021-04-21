import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Dashboard} from './views/Dashboard';
import {PageNotFound} from './views/PageNotFound';

export const AppRoutes = () => (
    <Router>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route component={PageNotFound} />
        </Switch>
    </Router>
);
