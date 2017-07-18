import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TextField from 'react-native-md-textinput';
import { Actions } from 'react-native-router-flux';
import UserSelection from '../Views';
import Modal from 'react-native-modalbox';
import styles from './styles';

// import {
//   logOutUser
// } from '../../actions/user';
const goToUserSelectScreen = () => {
  Actions.userSelection();
  // alert('test');
};

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

  onButtonPressed() {
    goToUserSelectScreen();
    // alert('Test');
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

        {/* <View style={styles.addFriendsContainer}>
          <Text style={styles.addFriendsAndImageText}>add friends</Text>
          <TouchableOpacity
            style={styles.addFriendsButton}
            onPress={this.onButtonPressed.bind(this)}
          >
            <View style={styles.addFriendsButtonContainer}>
          <Icon
          name='ios-add'
          size={20}
          style={styles.icon2}
          />
            </View>
          </TouchableOpacity>
        </View> */}

        <View style={styles.createRoomButtonContainer}>
          <TouchableOpacity
            style={styles.createRoomButton}
            onPress={this.onButtonPressed.bind(this)}
          >
            <Text style={styles.createRoomText}>Add Users</Text>
          </TouchableOpacity>
        </View>


      </Modal>
    </View>

    );
  }
}

export default CreateRoomBtn;
