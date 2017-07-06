import React from 'react';
import { View, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import styles from './styles';

const LoginInput = () => (
  <ScrollView style={styles.inputFieldContainer}>
    <View>
      <TextField
        autoCorrect={false}
        enablesReturnKeyAutomatically
        highlightColor={'#FF456E'}
        keyboardType={'email-address'}
        label={'email'}
        style={styles.textInput}
      />

    </View>

    <View>
      <TextField
        enablesReturnKeyAutomatically
        highlightColor={'#FF456E'}
        label={'password'}
        secureTextEntry
        style-={styles.textInput}
      />
    </View>
  </ScrollView>
);

export default LoginInput;
