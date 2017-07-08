import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';

const RouterComponent = () => (
  <Router>
      {/* hiding the navabar is done by hideNavBar */}
      <Scene key="auth">
      <Scene key="Login" component={Login} hideNavBar />
      </Scene>

      <Scene key='signupForm'>
      <Scene key="SignUp" component={SignUp} hideNavBar />
      </Scene>

      <Scene key='homeScreen'>
        <Scene key="Home" component={Home} hideNavBar={false} sceneStyle={{ paddingTop: 65 }} />
      </Scene>

    </Router>
  );

export default RouterComponent;
