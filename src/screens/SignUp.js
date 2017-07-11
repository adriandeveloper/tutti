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
  emailChangedSU,
  userChangedSU,
  passwordChangedSU,
  signUpUser
} from '../actions/signup/';
// import LoginBtn from '../components/Buttons/LoginBtn';


class SignUp extends Component {

  onUserChangeSU(text) {
    this.props.userChangedSU(text);
  }

  onEmailChangeSU(text) {
    this.props.emailChangedSU(text);
  }

  onPasswordChangeSU(text) {
    this.props.passwordChangedSU(text);
  }

  onButtonPress() {
    const { email_su, password_su } = this.props;
    this.props.signUpUser({ email_su, password_su });
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

        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>OR</Text>
          </View>

          <ScrollView >
            <View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                highlightColor={'#FF456E'}
                label={'username'}
                style={styles.textInput}
                onChangeText={this.onUserChangeSU.bind(this)}
                value={this.props.user_su}
              />
            </View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                highlightColor={'#FF456E'}
                label={'email'}
                style={styles.textInput}
                onChangeText={this.onEmailChangeSU.bind(this)}
                value={this.props.email_su}
              />
            <View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                secureTextEntry
                highlightColor={'#FF456E'}
                label={'password'}
                style={styles.textInput}
                onChangeText={this.onPasswordChangeSU.bind(this)}
                value={this.props.password_su}
              />
            </View>
            <View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                highlightColor={'#FF456E'}
                label={'retype password'}
                style={styles.textInput}
              />
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          // onPress={() => console.log('puff')}
          onPress={this.onButtonPress.bind(this)}
          resizeMode="contain"
          style={styles.loginContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.loginTextFont}>Log In!</Text>
          </View>
        </TouchableOpacity>

        <FooterSignUp />
      </SignUpContainer>
    );
  }
}

const mapStateToProps = state => ({
    user_su: state.sign.user_su,
    email_su: state.sign.email_su,
    password_su: state.sign.password_su
  });

export default connect(mapStateToProps, {
  emailChangedSU,
  userChangedSU,
  passwordChangedSU,
  signUpUser
  })(SignUp);
