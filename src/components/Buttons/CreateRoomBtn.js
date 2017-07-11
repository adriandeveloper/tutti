import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CreateRoomBtn = () => (
  <TouchableOpacity style={styles.createRoomContainer}>
    <View >
      <Text style={styles.createRoomText}>Create a Room</Text>
    </View>
    <View>
        <Text style={styles.plusText}>+</Text>
    </View>

  </TouchableOpacity>
);

export default CreateRoomBtn;
