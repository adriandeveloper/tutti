import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { ChatContainer } from '../components/Containers';
import { SearchHeader } from '../components/Header';
import { CreateRoom } from '../components/Buttons';

class Chat extends Component {
  render() {
    return (
      <ChatContainer>
        <StatusBar
          translucent={false}
          barStyle='light-content'
        />

        <SearchHeader />

      </ChatContainer>
    );
  }
}


export default Chat;
