import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {AppLayout} from './components/layout';
import {Dashboard} from './views/Dashboard';
import {PageNotFound} from './views/PageNotFound';

export const AppRoutes = () => (
    <Router>
        <Route path="/">
            <AppLayout>
                <Switch>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Redirect to="/dashboard" from="/" exact />
                    <Route component={PageNotFound} />
                </Switch>
            </AppLayout>
        </Route>
    </Router>
);
