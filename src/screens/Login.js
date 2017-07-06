import { connect } from 'react-redux';
import TextField from 'react-native-md-textinput';
import React, { Component } from 'react';
// import firebase from 'firebase';
import { StatusBar, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Container } from '../components/Containers';
import { Header } from '../components/Header';
// import LoginInput from '../components/InputText/LoginInput';
import { FacebookBtn, LoginBtn } from '../components/Buttons';
import { Footer } from '../components/Footer';
import styles from '../components/InputText/styles';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class Login extends Component {
  onEmailChange(text) {
  this.props.emailChanged(text);
}

onPasswordChange(text) {
  this.props.passwordChanged(text);
}

onButtonPress() {
  console.log(email);
    const { email, password } = this.props;
    // this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Container >
        <StatusBar
          translucent={false} barStyle='default'
        />
        <Header
          headerText="Let's Get Started"
        />

        <ScrollView style={styles.inputFieldContainer}>
          <View>
            <TextField
              autoCorrect={false}
              enablesReturnKeyAutomatically
              highlightColor={'#FF456E'}
              keyboardType={'email-address'}
              label={'email'}
              style={styles.textInput}
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />

          </View>

          <View>
            <TextField
              enablesReturnKeyAutomatically
              highlightColor={'#FF456E'}
              label={'password'}
              secureTextEntry
              style-={styles.textInput}
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </View>
        </ScrollView>


        <LoginBtn />

        <FacebookBtn
          buttonText='Login with Facebook'
        />
        <Footer />
      </Container>
    );
  }
}


const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password
  });


  export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
