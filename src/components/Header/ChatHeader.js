import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const ChatHeader = () => (
  <View style={styles.chatWrapper}>
    <View style={styles.iconContainer}>
      <TouchableOpacity >
        <Icon
          name='ios-arrow-back'
          size={30}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.chatHeaderContainer}>
      <Text style={styles.chatHeaderText}>Capstone Chat</Text>
    </View>
  </View>

  );


export default ChatHeader;
