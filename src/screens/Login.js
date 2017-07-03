import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header';
import { FacebookBtn } from '../components/Buttons';

class Login extends Component {
  render() {
    return (
      <View>
        <Header />
        <FacebookBtn />
      </View>
    );
  }
}

export default Login;
