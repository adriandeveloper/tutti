import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { RoomContainer } from '../components/Containers';
// import { SearchHeader } from '../components/Header';
import { CreateRoomBtn } from '../components/Buttons';

class Room extends Component {
  render() {
    return (
      <RoomContainer>
        <StatusBar
          translucent={false}
          barStyle='light-content'
        />

        {/* <SearchHeader /> */}

        <CreateRoomBtn />


      </RoomContainer>
    );
  }
}


export default Room;
