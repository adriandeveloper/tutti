import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import TextField from 'react-native-md-textinput';
import Modal from 'react-native-modalbox';
import styles from './styles';


class CreateRoomModal extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      roomName: '',
      roomDesc: '',
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

  buttonPress() {
    console.log('Button be pressed');
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
        <View style={styles.imageAndNameInputContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
            />
          </View>
          <View style={styles.textinputContainer}>
            <TextField
              autoCorrect={false}
              enablesReturnKeyAutomatically
              highlightColor={'#FF456E'}
              label={'name:'}
              style={styles.roomNameInput}
              onChangeText={(roomName) => this.setState({ roomName })}
              value={this.state.roomName}
            />
          </View>

        </View>

        <View style={styles.roomDescContainer}>
          <Text style={styles.roomDescTitle}>Room Description:</Text>

          <View style={styles.roomDescInputTxt}>
            <TextInput
              editable
              maxLength={40}
              multiline
              numberOfLines={3}
              onChangeText={roomDesc => this.setState({ roomDesc })}
              value={this.state.roomDesc}
            />
          </View>
        </View>

        <View style={styles.createRoomButtonContainer}>
          <Button
            style={styles.createRoomButton}
            title='Create Room'
            color='#FF456E'
          />
        </View>


      </Modal>
    </View>

  );
}
}

export default CreateRoomModal;
