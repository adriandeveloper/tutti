import { Actions } from 'react-native-router-flux';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FooterSignUp = () => (
  <View style={styles.container}>
    <Text> Have an account, <Text onPress={() => Actions.auth()}>Sign In</Text> </Text>
  </View>
);

export default FooterSignUp;
