import { Actions } from 'react-native-router-flux';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FooterSignUp = () => (
  <View style={styles.signUpContainer}>
    <Text
      style={styles.haveAccountText}
    >
      Already have an account?
      <Text
        style={styles.signInText}
        onPress={() => Actions.auth()}
      > Sign In
      </Text>
    </Text>
  </View>
);

export default FooterSignUp;
