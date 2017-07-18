import React, { Component } from 'react';
import { StatusBar, ScrollView, Text, View, Button, TextInput } from 'react-native';
import firebase from 'firebase';
import { ChatContainer } from '../components/Containers';
// import { MessageScreen } from '../components/Views';
import { ChatHeader } from '../components/Header';
// import { ChatFooter } from '../components/Footer';
// import styles from '../components/Views/styles.js';
class Chat extends Component {

  constructor(props) {
      super(props);
      this.state = { chat: '',
      messages: []

     };

      // displaying the data from firebase
      firebase.database().ref('Room').child('Chat').on('value', (snapshot) => {
        // console.log({ messages: snapshot.val() });
        // this.setState.message.push(snapshot.val())
        const msg = snapshot.val();
        const messages = [];
        // const msgSort = [];
        for (const outerKey in msg) {
          for (const innerKey in msg[outerKey]) {
            messages.push(msg[outerKey][innerKey]);
            messages.slice(0 - 16);
          }
        }

        console.log(messages.sort((a, b) => {
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          }

          return 0;
        }));
        this.setState({ messages });
        // console.log(snapsh);
      });
    }

  render() {
    return (
      <ChatContainer>
        <StatusBar
          translucent={false}
          barStyle='default'
        />

        <ChatHeader />

        {/* <ScrollView style={styles.messageWindow}>
          <Text>What the fuck!</Text>
        </ScrollView> */}

        <ScrollView style={styles.chatwindowStyle}>
          {/* sorting out the view */}
          {this.state.messages.map((message, index) => (
              <View key={`message-${index}`} >

              <Text style={styles.something} >
                  {message}
                </Text>

              </View>
            ))}
</ScrollView>


<View style={styles.inputpostionStyle}>

        <TextInput
          style={styles.messageInputStyle}
          placeholder="Type your message"
          //  ref={clearChat => this.chattextInput = clearChat}
           style={styles.textInputStyle}
           onChangeText={(text) => this.setState({ chat: text })}
           value={this.state.chat}
        />

      </View>


  <View style={styles.sendButtonContainer}>
    <Button
      style={styles.buttonpostionStyle}
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


        {/* <ChatFooter /> */}

      </ChatContainer>
    );
  }
}

const styles = {
  buttonpostionStyle: {
    bottom: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    left: 310,
    height: 20,
    width: 60,
  },
  chatwindowStyle: {
      backgroundColor: '#f0f8ff',
      height: 550,
      top: 5,
    },
  inputpostionStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 300,
    top: 10,
    left: 6
  },
  messageInputStyle: {
    height: 17,
    opacity: 0.64,
    color: '#008AD8',
    fontfamily: 'Lucida Grande',
    fontsize: 14,
    lineheight: 17
  },
  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },

  textViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    left: 6
  },
  logOutPostion: {
    height: 60,
    width: 375,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1
  },
  logOutBtn: {
    right: 150,
    top: 20
  }

};

export default Chat;
