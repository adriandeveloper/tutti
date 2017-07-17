import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Login, Rooms, Chat, SignUp, UserSelectionScreen } from './screens';

const RouterComponent = () => (
  <Router>
    {/* hiding the navabar is done by hideNavBar */}
    <Scene key="auth">
      <Scene key="Login" component={Login} hideNavBar />
    </Scene>

    <Scene key='signupForm'>
      <Scene key="SignUp" component={SignUp} hideNavBar />
    </Scene>

    <Scene key='roomScreen'>
      <Scene key="Rooms" component={Rooms} hideNavBar />
      {/* <Scene key="Chat" component={Chat} hideNavBar /> */}
    </Scene>

    <Scene key='chatScreen'>
      <Scene key='Chat' component={Chat} hideNavBar />
    </Scene>

    <Scene key='usrSelect'>
      <Scene key='UserSelectionScreen' component={UserSelectionScreen} hideNavBar />
    </Scene>

    </Router>
  );

export default RouterComponent;
