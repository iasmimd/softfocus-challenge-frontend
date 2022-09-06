import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import RegistrationDetail from '../pages/RegistrationDetail';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/registrar-comunicação'>
        <Registration />
      </Route>
      <Route path='/comunicações'>
        <RegistrationDetail/>
      </Route>
      <Route path='/comunicação/'>

      </Route>
    </Switch>
  );
};

export default Routes;
