import React, { Component } from 'react';
import { View, TextInput, Text, Button, ScrollView } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';

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
        messages.push(msg[outerKey]);
      }

      console.log(messages.sort((a, b) => {
        if (a.time < b.time) {
          return -1;
        } else if (a.time > b.time) {
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


      <View>


        {/* Below is the button for logging out of the current user */}
        <View style={styles.logOutPostion}>
          <View style={styles.logOutBtn}>

            <Button
              onPress={() => firebase.auth().signOut()}
              title='Log Out'
            />

          </View>

        </View>


        <ScrollView style={styles.chatwindowStyle}>
          {/* sorting out the view */}
          {this.state.messages.map((message, index) => (
            <View key={`message-${index}`} >

              <Text style={styles.textViewStyle} >
                {message.email}: {message.text} {message.time}
              </Text>
              {/* <Text style={styles.textViewStyle} >
                {message.email}
              </Text> */}
              {/* <Text style={styles.textViewStyle} >
                {message.time}
              </Text> */}

            </View>
          ))}
        </ScrollView>


        <View style={styles.inputpostionStyle}>

          <TextInput
            style={styles.messageInputStyle}
            placeholder="Type your message"
            ref={clearChat => this.chattextInput = clearChat}
            style={styles.textInputStyle}
            onChangeText={(text) => this.setState({ chat: text })}
            value={this.state.chat}
          />

        </View>


        {/* This button below when clicked sends data to firebase */}
        <View style={styles.buttonpostionStyle}>
          <Button
            title="send"
            onPress={() => {
              // alert(firebase.auth().currentUser.email);
              firebase.database().ref('Room').child('Chat')
              .push({
                email: firebase.auth().currentUser.email,
                text: this.state.chat,
                time: moment().format('LTS')
              });
              // .then(this.setState({ chat: '' }));
              this.chattextInput.setNativeProps({ text: '' });
            }}
          />
        </View>

      </View>

    );
  }
}


const styles = EStyleSheet.create({
  buttonpostionStyle: {
    bottom: 15,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    left: 310,
    height: 20,
    width: 60,
  },
  chatwindowStyle: {
      backgroundColor: '$white',
      height: 519,
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
    fontFamily: 'Lucida Grande',
    fontSize: 14,
    lineHeight: 17
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

});

export default Chat;
