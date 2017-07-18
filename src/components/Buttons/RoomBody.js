import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

// import {
//   logOutUser
// } from '../../actions/user';
const goToUserSelectScreen = () => {
  Actions.chatScreen();
  // alert('test');
};

class RoomBody extends Component {

  onButtonPressed() {
    goToUserSelectScreen();
  }

  render() {
    return (
          <TouchableOpacity
            style={styles.roomImageContainer}
            onPress={this.onButtonPressed.bind(this)}
          >
            <Image
              style={styles.roomImage}
              source={{uri: 'https://image.ibb.co/hrroSv/room_6.png' }}
            />
          </TouchableOpacity>
    );
  }
}

// [url=https://imgbb.com/][img]https://image.ibb.co/hrroSv/room_6.png[/img][/url]
// [url=https://imgbb.com/]image hosting anonymous[/url]

export default RoomBody;
