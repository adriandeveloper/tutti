import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './styles';

class CreateRoomBtn extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
    };
  }

  onClose() {
    console.log('Modal closed');
  }

  onOpen() {
    console.log('Modal opened');
  }

  onClosingState() {
    console.log('the open/close of the swipeToClose just changed');
  }

  render() {
    return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.createRoomContainer}
        onPress={() => this.refs.modal.open()}
      >
        <View >
          <Text style={styles.createRoomText}>Create a Room</Text>
        </View>
        <View>
            <Text style={styles.plusText}>+</Text>
        </View>

      </TouchableOpacity>

      <Modal
        style={styles.modal}
        swipeToClose={this.state.swipeToClose}
        onCLosed={this.onClose}
        onOpened={this.onOpen}
        position={'center'}
        isDisabled={this.state.isDisabled}
        ref={'modal'}
      >
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
      </Modal>
    </View>

    );
  }
}

export default CreateRoomBtn;
