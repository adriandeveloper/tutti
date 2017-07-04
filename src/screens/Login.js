import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header';
import { FacebookBtn, LoginBtn } from '../components/Buttons';

class Login extends Component {
  render() {
    return (
      <View>
        <Header />
        <LoginBtn />
        <FacebookBtn />
      </View>
    );
  }
}

export default Login;
