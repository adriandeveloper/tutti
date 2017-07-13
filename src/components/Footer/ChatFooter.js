import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
import styles from './styles';

class ChatFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chat: '',
    };
  }

  render() {
    return (
      <View style={styles.chatFooterContainer}>
        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder='Type your message'
            onChangeText={text => this.setState({ chat: text })}
            value={this.state.chat}
          />
        </View>

        <View style={styles.sendButtonContainer}>
          <Button
            style={styles.sendButton}
            title='send'
          />
        </View>
      </View>

    );
  }
}

export default ChatFooter;
