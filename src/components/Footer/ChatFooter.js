import React, { Component } from 'react';
import { TouchableOpacity, Button, View, TextInput } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class ChatFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chat: '',
    };
  }

  // onButtonPress() {
  //   alert('yellow');
  //         firebase.database().ref('Room').child('Chat')
  //           .child(this.props.username)
  //           .push(new Date() + this.state.chat: text);
  //           this.chattextInput.setNativeProps({ text: '' });
  //   }


  render() {
    return (

      <View style={styles.chatFooterContainer}>
        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder='say something cool'
            onChangeText={(text) => this.setState({ chat: text })}
            value={this.state.chat}
          />
        </View>

        <View style={styles.sendButtonContainer}>
          {/* <Button
            style={styles.sendButton}
            title='send'
            // onPress={this.onButtonPress.bind(this)}
            onPress={() => {
              firebase.database().ref('Room').child('Chat').push(this.state.chat)
              .then(this.setState({ chat: '' }));
            }}
          /> */}
          <TouchableOpacity
            style={styles.sendButton}
            // title='send'
            // onPress={this.onButtonPress.bind(this)}
            onPress={() => {
              firebase.database().ref('Room').child('Chat').push(this.state.chat)
              .then(this.setState({ chat: '' }));
            }}
          >
            <View style={styles.sendIconContainer}>
              <Icon
                name='md-send'
                size={25}
                style={styles.sendIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

export default ChatFooter;
