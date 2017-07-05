import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const FacebookBtn = () => (
    <TouchableOpacity
      style={styles.container}
      resizeMode='contain'
    >
        <View style={styles.textContainer}>
          <Text style={styles.textFont}>Login with Facebook</Text>
        </View>
      </TouchableOpacity>
);

export default FacebookBtn;
