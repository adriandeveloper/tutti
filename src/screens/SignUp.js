import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View, Text, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import { SignUpContainer } from '../components/Containers';
import { Header } from '../components/Header';
import { FacebookBtn } from '../components/Buttons';
// import { SignUpForm } from '../components/Forms';
import FooterSignUp from '../components/Footer/FooterSignUp';
import styles from '../components/Forms/styles';
import { emailChangedSU, userChangedSU, passwordChangedSU } from '../actions2/signup/signup';

class SignUp extends Component {

  onUserChangeSU(text1) {
    this.props.userChangedSU(text1);
  }

  onEmailChangeSU(text1) {
    this.props.emailChangedSU(text1);
  }

  onPasswordChangeSU(text1) {
    this.props.passwordChangedSU(text1);
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
                value={this.props.foo}
              />
            </View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                highlightColor={'#FF456E'}
                label={'email'}
                style={styles.textInput}
                onChangeText={this.onEmailChangeSU.bind(this)}
                value={this.props.foo2}
              />
            <View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                secureTextEntry
                highlightColor={'#FF456E'}
                label={'password'}
                style={styles.textInput}
                // onChangeText={this.onPasswordChangeSU.bind(this)}
                // value={this.props.foo3}
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


        <FooterSignUp />
      </SignUpContainer>
    );
  }
}

const mapStateToProps = state2 => ({
    foo: state2.sign.foo,
    foo2: state2.sign.foo2,
    foo3: state2.sign.foo3
  });

export default connect(mapStateToProps, {
  emailChangedSU,
  userChangedSU,
  passwordChangedSU })(SignUp);
