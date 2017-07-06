import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SignUpContainer } from '../components/Containers';
import { Header } from '../components/Header';
import { FacebookBtn } from '../components/Buttons';
import { SignUpForm } from '../components/Forms';
import { Footer } from '../components/Footer';


class SignUp extends Component {
  render() {
    return (
      <SignUpContainer>
        <StatusBar
          translucent={false}
          barStyle='light-content'
        />
        <Header
          headerText='Sign Up'
        />
        <FacebookBtn
         buttonText='Sign Up with Facebook'
        />
        <SignUpForm />
        <Footer />
      </SignUpContainer>
    );
  }
}

export default SignUp;
