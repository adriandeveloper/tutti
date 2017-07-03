import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
import Login from './screens/Login';

EStyleSheet.build({
  $primaryBlue: '#008AD8',
  $primaryPink: '#FF456E',
  $secondaryPink: '#F60068',
  $darkBlue: '#373E52',
  $facebookColor: '#3C539A',
  $googleColor: '#DB402C',
  $white: '#fff',
  $textColor: '#373e52',

  // toggle to see where the components are laid out
  // outline: 1,
});

export default () => <Login />;
