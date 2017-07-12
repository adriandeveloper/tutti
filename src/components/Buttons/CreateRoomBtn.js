import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TextField from 'react-native-md-textinput';
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
        animationType={'fade'}
        style={styles.modal}
        swipeToClose={this.state.swipeToClose}
        onCLosed={this.onClose}
        onOpened={this.onOpen}
        position={'center'}
        isDisabled={this.state.isDisabled}
        ref={'modal'}
      >
        <View style={styles.createRoomTxtContainer}>
          <Text style={styles.createRoomHeaderTxt}>Let's Create a Room!</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
          />
        </View>
        <View style={styles.textinputContainer}>
          <TextField
            autoCorrect={false}
            enablesReturnKeyAutomatically
            highlightColor={'#FF456E'}
            label={'name:'}
            style={styles.roomNameInput}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </View>
      </Modal>
    </View>

    );
  }
}

export default CreateRoomBtn;
