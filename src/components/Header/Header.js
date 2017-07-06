import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const Header = (props) => (
    <View style={styles.container}>
      <View style={styles.textTitleContainer}>
        <Text style={styles.titleFont}>tutti</Text>
      </View>
      <View style={styles.gettingStartedContainer}>
        <Text style={styles.gettingStartedText}>
          {props.headerText}
        </Text>
      </View>
    </View>

  );


export default Header;
