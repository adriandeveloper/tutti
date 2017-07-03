import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

const FacebookBtn = () => (
  <View style={styles.container}>
    <Text style={styles.appFont}>Tutti</Text>

    <TouchableOpacity>
      <View style={styles.wrapper} />
    </TouchableOpacity>
  </View>
);

export default FacebookBtn;
