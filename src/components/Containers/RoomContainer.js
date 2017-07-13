import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const RoomContainer = ({ children }) => (
  <View style={styles.roomContainer}>
    {children}
  </View>
);

RoomContainer.propTypes = {
  children: PropTypes.any
};

export default RoomContainer;
