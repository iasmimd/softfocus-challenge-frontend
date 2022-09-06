import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import RegistrationDetail from '../pages/RegistrationDetail';
import Signup from '../pages/Signup';
import { useAnalyst } from '../providers/Analyst';

const Routes = () => {

  const {autentication} = useAnalyst()

  return (
    <Switch>
      <Route exact path='/'>
        <Login autentication={autentication} />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/dashboard'>
        <Dashboard autentication={autentication} />
      </Route>
      <Route path='/registrar-comunicação'>
        <Registration autentication={autentication} />
      </Route>
      <Route path='/comunicações'>
        <RegistrationDetail autentication={autentication} />
      </Route>
    </Switch>
  );
};

export default Routes;
