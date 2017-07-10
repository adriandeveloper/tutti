// import React from 'react';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import Chat from './screens/Chat';

import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


EStyleSheet.build({
  $primaryBlue: '#008AD8',
  $primaryPink: '#FF456E',
  $secondaryPink: '#F60068',
  $darkBlue: '#373E52',
  $facebookColor: '#3C539A',
  $googleColor: '#DB402C',
  $white: '#fff',
  $textColor: '#373e52',
  $offWhite: '#fcfafa',

  // toggle to see where the components are laid out
  // outline: 1,
});

// export default () => <Chat />;

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBWBtQ6sCTlZCt6HM-DJnrnO__HGMdcCEc',
      authDomain: 'tutti-chat.firebaseapp.com',
      databaseURL: 'https://tutti-chat.firebaseio.com',
      projectId: 'tutti-chat',
      storageBucket: 'tutti-chat.appspot.com',
      messagingSenderId: '819293763335'
     };
 firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;
