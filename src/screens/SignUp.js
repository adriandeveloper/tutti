import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import TextField from 'react-native-md-textinput';
import { SignUpContainer } from '../components/Containers';
import { Header } from '../components/Header';
import { FacebookBtn } from '../components/Buttons';
// import { SignUpForm } from '../components/Forms';
import FooterSignUp from '../components/Footer/FooterSignUp';
import styles from '../components/Forms/styles';
import {
  // emailChangedSU,
  // userChangedSU,
  // passwordChangedSU,
  signUpUserSU
} from '../actions/signup/';
// import LoginBtn from '../components/Buttons/LoginBtn';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  onUserChangeSU(text) {
    this.setState({
      username: text
    });
    // this.props.userChangedSU(text);
  }

  onEmailChangeSU(text) {
    this.setState({
      email: text
    });
    // this.props.emailChangedSU(text);
  }

  onPasswordChangeSU(text) {
    this.setState({
      password: text
    });
    // this.props.passwordChangedSU(text);
  }

  onConfirmPasswordChangeSU(text) {
    this.setState({
      confirmPassword: text
    });
    // this.props.passwordChangedSU(text);
  }

  onButtonPress() {
    const {
      username,
      email,
      password,
      confirmPassword
    } = this.state;
    this.props.signUpUserSU({
      username_su: username,
      email_su: email,
      password_su: password,
      confirm_password_su: confirmPassword
    });
    // this.props.loginUser({ email_su, password_su });
  }

  render() {
    //event handelers

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
        {/* <SignUpForm /> */}

        <View style={[styles.container, styles.containerShadow]}>

          <ScrollView>
            <View style={styles.textFieldContainer}>
              <View style={styles.textContainerField}>
                <TextField
                  autoCorrect={false}
                  enablesReturnKeyAutomatically
                  highlightColor={'#FF456E'}
                  label={'username'}
                  style={styles.textInput}
                  onChangeText={this.onUserChangeSU.bind(this)}
                  value={this.state.username}
                />
              </View>
              <View style={styles.textContainerField}>
                <TextField
                  autoCorrect={false}
                  enablesReturnKeyAutomatically
                  highlightColor={'#FF456E'}
                  label={'email'}
                  style={styles.textInput}
                  onChangeText={this.onEmailChangeSU.bind(this)}
                  value={this.state.email}
                />
              </View>
              <View style={styles.textContainerField}>
                <TextField
                  autoCorrect={false}
                  enablesReturnKeyAutomatically
                  secureTextEntry
                  highlightColor={'#FF456E'}
                  label={'password'}
                  style={styles.textInput}
                  onChangeText={this.onPasswordChangeSU.bind(this)}
                  value={this.state.password}
                />
              </View>
              <View style={styles.textContainerField}>
                <TextField
                  autoCorrect={false}
                  enablesReturnKeyAutomatically
                  highlightColor={'#FF456E'}
                  label={'retype password'}
                  style={styles.textInput}
                  onChangeText={this.onConfirmPasswordChangeSU.bind(this)}
                  value={this.state.confirmPassword}
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            // onPress={() => console.log('puff')}
            onPress={this.onButtonPress.bind(this)}
            resizeMode="contain"
            style={styles.loginContainer}
          >
              <View style={styles.textContainer}>
                <Text style={styles.createAccountText}>Create Account</Text>
              </View>
            </TouchableOpacity>
        </View>

        <FooterSignUp />
      </SignUpContainer>
    );
  }
}

export default connect(null, {
  signUpUserSU
  })(SignUp);
