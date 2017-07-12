import { Actions } from 'react-native-router-flux';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Footer = () => (
  <View style={styles.container}>
    <Text>Don't have an account? <Text
                                  style={styles.signUpText}
                                  onPress={() => Actions.signupForm()}
    >
                                    Sign up
                                </Text>
    </Text>
  </View>
);

export default Footer;
