import React, { Component } from 'react';
import firebase from 'firebase';
import { StatusBar } from 'react-native';
import { Container } from '../components/Containers';
import { Header } from '../components/Header';
import LoginInput from '../components/InputText/LoginInput';
import { FacebookBtn, LoginBtn } from '../components/Buttons';
import { Footer } from '../components/Footer';

class Login extends Component {

  render() {
    return (
      <Container >
        <StatusBar
          translucent={false} barStyle='default'
        />
        <Header />
        <LoginInput />
        <LoginBtn />
        <FacebookBtn />
        <Footer />
      </Container>
    );
  }
}

export default Login;
