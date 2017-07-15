import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TextField from 'react-native-md-textinput';
import Modal from 'react-native-modalbox';
import styles from './styles';

class CreateRoomBtn extends Component {


  constructor() {
    super();
    this.state = {
      // isOpen: false,
      // isDisabled: false,
      // swipeToClose: true,
      roomName: '',
      roomDesc: '',

    };
  }

  // state = { roomName: '', roomDesc: '', };

  onButtonPress() {
    const { roomName, roomDesc } = this.state;
    firebase.database().ref('Room').child('RoomName')
    .child(this.props.roomName)
    .push(this.state.roomName: roomName);
    // console.log(this.state);
  }

  onPressButton() {
    firebase.auth().signOut();
  }

  render() {
    return (
    <View style={styles.wrapper}>
      <View style={styles.headerButtonsContainer}>
        <TouchableOpacity
          onPress={() => firebase.auth().signOut()}
        >
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutTxt}>Logout</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createRoomContainer}
          onPress={() => this.refs.modal.open()}
        >

            <View style={styles.iconContainer}>
              <Icon
                name='ios-add'
                size={40}
                style={styles.icon}
              />
            </View>

          </TouchableOpacity>

      </View>

      <View style={styles.textHeadersContainer}>
        <View>
          <Text style={styles.textHeader}> Looks like nobody's home :(</Text>
        </View>
        <View>
          <Text style={styles.textSubHeader}>click on the 'plus' above to add some groups</Text>
        </View>
      </View>

      <Modal
        animationType={'fade'}
        style={styles.modal}
        swipeToClose={this.state.swipeToClose}
        // onCLosed={this.onClose}
        // onOpened={this.onOpen}
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
              onChangeText={roomName => this.setState({ roomName })}
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
            onPress={this.onButtonPress.bind(this)}
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

export default CreateRoomBtn;
