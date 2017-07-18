import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
import firebase from 'firebase';
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
            placeholder='Type your message'
            onChangeText={(text) => this.setState({ chat: text })}
            value={this.state.chat}
          />
        </View>

        <View style={styles.sendButtonContainer}>
          <Button
            style={styles.sendButton}
            title='send'
            // onPress={this.onButtonPress.bind(this)}
            onPress={() => {
              alert(firebase.auth().currentUser.email);
              firebase.database().ref('Room').child('Chat')
              .push(firebase.auth().currentUser.email + ':' + ' ' +this.state.chat)
              .then(this.setState({ chat: '' }));
          }}
          />
        </View>
      </View>

    );
  }
}

export default ChatFooter;
