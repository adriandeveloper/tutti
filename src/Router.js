import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Login, Rooms, Chat, SignUp, UserSelectionScreen } from './screens';

// const prevGetStateForAction = Homestack.router.getStateForAction;
// HomeStack.router = {
//   ...HomeStack.router,
//   getStateForAction(action, state){
//     if (state && action.type === 'ReplaceCurrentScreen') {
//       const routes = state.routes.slice(0, state.routes.length - 1);
//       routes.push(action);
//       return {
//         ...state,
//         routes,
//         index: routes.length - 1,
//       }
//       return prevGetStateForAction(action, state);
//     }
//   }

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

    <Scene key='userSelection'>
      <Scene key='UserSelectionScreen' component={UserSelectionScreen} hideNavBar />
    </Scene>

  </Router>


  );


export default RouterComponent;
