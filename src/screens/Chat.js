import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ChatContainer } from '../components/Containers';

class Chat extends Component {
  render() {
    return (
      <ChatContainer>
        <StatusBar
          translucent={false}
          barStyle='default'
        />



      </ChatContainer>
    );
  }
}


export default Chat;
