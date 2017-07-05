import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { SignUpContainer } from '../components/Containers';

class SignUp extends Component {
  render() {
    return (
      <SignUpContainer>
        <StatusBar
          translucent={false}
          barStyle='light-content'
        />
        <View />
      </SignUpContainer>
    );
  }
}

export default SignUp;
