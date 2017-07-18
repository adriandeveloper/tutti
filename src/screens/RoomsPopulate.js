import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { RoomContainer } from '../components/Containers';
import { SearchHeader2 } from '../components/Header';
import { RoomBody } from '../components/Buttons';
// import { CreateRoomBtn } from '../components/Buttons';

class Room extends Component {
  render() {
    return (
      <RoomContainer>
        <StatusBar
          translucent={false}
          barStyle='light-content'
        />

        <SearchHeader2 />

        <RoomBody />


      </RoomContainer>
    );
  }
}


export default Room;
