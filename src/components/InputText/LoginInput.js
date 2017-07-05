import React from 'react';
import { View, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import styles from './styles';

const LoginInput = () => (
  <ScrollView>
    <View>
      <TextField
        style={styles.textInput}
        label={'email'}
        highlightColor={'#FF456E'}
      />

    </View>

    <View>
      <TextField
        style-={styles.textInput}
        label={'password'}
        highlightColor={'#FF456E'}
      />
    </View>
  </ScrollView>
);

export default LoginInput;
