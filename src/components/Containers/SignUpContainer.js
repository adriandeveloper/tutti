import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const SignUpContainer = ({ children }) => (
  <View style={styles.signUpContainer}>
    {children}
  </View>
);

SignUpContainer.propTypes = {
  children: PropTypes.any
};

export default SignUpContainer;
