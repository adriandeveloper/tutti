import { connect } from 'react-redux';
import TextField from 'react-native-md-textinput';
import React, { Component } from 'react';
import { StatusBar, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Container } from '../components/Containers';
import { Header } from '../components/Header';
// import LoginInput from '../components/InputText/LoginInput';
import { FacebookBtn } from '../components/Buttons';
import { Footer } from '../components/Footer';
import styles from '../components/InputText/styles';
import { emailChanged, passwordChanged, loginUser } from '../actions/login';


class Login extends Component {
  onEmailChange(text) {
  this.props.emailChanged(text);
}

onPasswordChange(text) {
  this.props.passwordChanged(text);
}

onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
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
        {/* below if for error message */}
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        {/* <LoginBtn /> */}


        <TouchableOpacity
          // onPress={() => alert('puff')}
          onPress={this.onButtonPress.bind(this)}
          resizeMode="contain"
          style={styles.loginContainer}
        >
          <View style={styles.textContainer}>
            <Text style={styles.loginTextFont}>Log In!</Text>
          </View>
        </TouchableOpacity>


        <FacebookBtn
          buttonText='Login with Facebook'
        />
        <Footer />
      </Container>
    );
  }
}


const mapStateToProps = ({ auth }) => {
    const { email, password, error } = auth;
    return { email, password, error };
  };


  export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
