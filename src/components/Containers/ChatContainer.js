import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

const ChatContainer = ({ children }) => (
  <View style={styles.chatContainer}>
    {children}
  </View>
);

ChatContainer.propTypes = {
  children: PropTypes.any
};

export default ChatContainer;
