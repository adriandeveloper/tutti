import React from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';


const MessageScreen = () => (
  <ScrollView style={styles.messageWindow}>
    <Text>Message</Text>
  </ScrollView>
);

export default MessageScreen;
