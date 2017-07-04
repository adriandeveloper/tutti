import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const LoginBtn = () => (
  <TouchableOpacity
    resizeMode="contain"
    style={styles.loginContainer}
  >
    <View style={styles.textContainer}>
      <Text style={styles.textFont}>Log In!</Text>
    </View>
  </TouchableOpacity>
);
export default LoginBtn;
