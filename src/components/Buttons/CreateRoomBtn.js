import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TextField from 'react-native-md-textinput';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modalbox';
import styles from './styles';

// import {
//   logOutUser
// } from '../../actions/user';


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
    // const { roomName, roomDesc } = this.state;
    // alert('Noni');
    // const fireBaseUser = firebase.auth().currentUser;
    // const { currentUser } = firebase.auth();


      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          alert(firebase.auth().currentUser.email);
        } else {
          alert('No user!');
        }
      });
}

    // firebase.database().ref(this.state.roomName).push(this.state.roomDesc);
    // .child(this.props.roomName)
    // .push(this.state.roomName: roomName);
    // console.log(this.state);
    //
    // listenToUserStatusUpdate(loader: any) {
    //       firebase.auth().onAuthStateChanged((user) => {
    //       if(loader)
    //       loader.dismiss();
    //       console.log("The User:", user);
    //       if (user) {
    //       this.nav.setRoot(TabsPage);
    //       } else {
    //       this.nav.setRoot(LoginPage);
    //       }
    //       });
    //       }
    //       }


  onPressButton() {
    Actions.auth();
  }

  render() {
    return (
    <View style={styles.wrapper}>
      <View style={styles.headerButtonsContainer}>
        <TouchableOpacity >
          <View style={styles.logoutContainer}>
            <Text onPress={this.onPressButton.bind(this)} style={styles.logoutTxt}>Logout</Text>
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
        <View style={styles.createRoomHeaderContainer}>
          <Text style={styles.createRoomHeaderTxt}>Let's Create a Room!</Text>
        </View>
        <View style={styles.imageAndNameInputContainer}>

          <View style={styles.roomContainer}>
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

        <View style={styles.roomContainer}>
            <TextField
              autoCorrect={false}
              enablesReturnKeyAutomatically
              highlightColor={'#FF456E'}
              label={'room description:'}
              style={styles.roomDescInput}
              onChangeText={roomDesc => this.setState({ roomDesc })}
              value={this.state.roomDesc}
            />
        </View>

        <View style={styles.addFriendsContainer}>
          <Text style={styles.addFriendsAndImageText}>add friends</Text>
        </View>


        <View style={styles.addImageContainer}>
          <View><Text style={styles.addFriendsAndImageText}>add an image</Text></View>
          <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          />
          </View>
        </View>

        <View style={styles.createRoomButtonContainer}>
          <TouchableOpacity
            style={styles.createRoomButton}
            onPress={this.onButtonPress.bind(this)}
          >
              <Text style={styles.createRoomText}>CREATE ROOM</Text>
          </TouchableOpacity>
        </View>


      </Modal>
    </View>

    );
  }
}

export default CreateRoomBtn;
