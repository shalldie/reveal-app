import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {AppLayout} from './components/layout';
import {Dashboard} from './views/Dashboard';
import {PageNotFound} from './views/PageNotFound';
import {Todo} from './views/Todo';

export const AppRoutes = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Route path="/">
            <AppLayout>
                <Switch>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/todo/:type" component={Todo} />
                    <Redirect to="/dashboard" from="/" exact />
                    <Route component={PageNotFound} />
                </Switch>
            </AppLayout>
        </Route>
    </Router>
);
