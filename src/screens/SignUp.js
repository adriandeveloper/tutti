import React, { Component } from 'react';
import { StatusBar, View, Text, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import { SignUpContainer } from '../components/Containers';
import { Header } from '../components/Header';
import { FacebookBtn } from '../components/Buttons';
// import { SignUpForm } from '../components/Forms';
import FooterSignUp from '../components/Footer/FooterSignUp';
import styles from '../components/Forms/styles';

class SignUp extends Component {
  stat={ text: '' };

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
                // value={this.state.text}

              />
            </View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                highlightColor={'#FF456E'}
                label={'email'}
                style={styles.textInput}
              />
            <View>
              <TextField
                autoCorrect={false}
                enablesReturnKeyAutomatically
                highlightColor={'#FF456E'}
                label={'password'}
                style={styles.textInput}
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

export default SignUp;
