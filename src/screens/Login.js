import React, { Component } from 'react';
// import { View } from 'react-native';
import { Container } from '../components/Containers';
import { Header } from '../components/Header';
import { FacebookBtn, LoginBtn } from '../components/Buttons';
import { Footer } from '../components/Footer';

class Login extends Component {
  render() {
    return (
      <Container >
        <Header />
        <LoginBtn />
        <FacebookBtn />
        <Footer />
      </Container>
    );
  }
}

export default Login;
