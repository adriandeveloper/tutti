import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ChatContainer } from '../components/Containers';
import { MessageScreen } from '../components/Views';
import { ChatHeader } from '../components/Header';
import { ChatFooter } from '../components/Footer';

class Chat extends Component {
  render() {
    return (
      <ChatContainer>
        <StatusBar
          translucent={false}
          barStyle='default'
        />

        <ChatHeader />

        <MessageScreen />

        <ChatFooter />

      </ChatContainer>
    );
  }
}


export default Chat;
