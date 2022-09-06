import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import RegistrationDetail from '../pages/RegistrationDetail';
import Signup from '../pages/Signup';

const Routes = () => {
  const [autentication, setAutentication] = useState<Boolean>(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@proagro:auth') || '{}');
    if (token) {
      return setAutentication(true);
    }
  }, [autentication]);

  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/dashboard'>
        <Dashboard autentication={autentication}/>
      </Route>
      <Route path='/registrar-comunicação'>
        <Registration autentication={autentication}/>
      </Route>
      <Route path='/comunicações'>
        <RegistrationDetail autentication={autentication}/>
      </Route>
      <Route path='/comunicação/'>

      </Route>
    </Switch>
  );
};

export default Routes;
