import React from 'react';
import { View, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import styles from './styles';

const LoginInput = () => (
  <ScrollView style={styles.inputFieldContainer}>
    <View>
      <TextField
        highlightColor={'#FF456E'}
        label={'email'}
        style={styles.textInput}
      />

    </View>

    <View>
      <TextField
        highlightColor={'#FF456E'}
        label={'password'}
        secureTextEntry
        style-={styles.textInput}
      />
    </View>
  </ScrollView>
);

export default LoginInput;
