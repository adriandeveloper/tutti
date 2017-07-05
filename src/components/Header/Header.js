import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textTitleContainer}>
          <Text style={styles.titleFont}>tutti</Text>
        </View>
        <View style={styles.gettingStartedContainer}>
          <Text style={styles.gettingStartedText}>
            Let's get started
          </Text>
        </View>
      </View>

    );
  }

}

export default Header;
