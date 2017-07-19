import React, { Component } from 'react';
import { StatusBar, View, TextInput, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
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
        <View>
          <StatusBar
            translucent={false}
            barStyle='default'
          />
        </View>


        {/* Below is the button for logging out of the current user */}
        <View style={styles.headerWrapper}>

          <View style={styles.iconContainer}>
            <TouchableOpacity >
              <Icon
                name='ios-arrow-back'
                size={30}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.chatRoomTitleContainer}>
            <Text style={styles.chatRoomTitleText}>Capstone Chat</Text>
          </View>
        </View>


        <ScrollView style={styles.chatwindowStyle}>
          {/* sorting out the view */}
          {this.state.messages.map((message, index) => (
            <View
              style={styles.chatWrapper}
              key={`message-${index}`}
            >

              <View style={styles.messageEmailContainer}>
              <Text style={styles.messageEmailText} >
                {message.email}
              </Text>
            </View>

              <View style={[styles.messageTextContainer, styles.messageTextShadow]}>
                <View style={styles.messageTextFix}>
                  <Text style={styles.messageText} >
                    {message.text}
                  </Text>

                </View>
            </View>
              <View style={styles.messageTimeContainer}>
              <Text style={styles.messageTimeText} >
                {message.time}
              </Text>
            </View>

            </View>
          ))}
        </ScrollView>


        <View style={styles.messageContainer}>

          <TextInput
            placeholder="say something cool"
            ref={clearChat => this.chattextInput = clearChat}
            style={styles.inputText}
            onChangeText={(text) => this.setState({ chat: text })}
            value={this.state.chat}
          />

          <View style={styles.sendButtonContainer}>
            <TouchableOpacity
              style={styles.sendButton}
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


        {/* This button below when clicked sends data to firebase */}
        {/* <View style={styles.buttonpostionStyle}>
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


        </View> */}


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
      height: 564,
      top: 5,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputText: {
    height: 40,
    width: 289,
    left: 6,
  },

  headerWrapper: {
    height: 60,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  icon: {
    color: 'rgb(246, 0, 104)',

  },
  iconContainer: {
    marginTop: 20,
    left: 10,
  },
  chatRoomTitleText: {
    color: 'rgb(246, 0, 104)',
    fontFamily: 'OpenSans',
    fontSize: 18,
    fontWeight: '400',
  },
  chatRoomTitleContainer: {
    marginTop: 20,
    right: 120,
    flexDirection: 'column',
  },
  sendButtonContainer: {
  },
  sendIcon: {
    color: 'rgb(246, 0, 104)',
  },
  sendIconContainer: {
    right: 32,
  },
  messageTimeContainer: {
    alignSelf: 'flex-end',
    bottom: 119,
    right: 60,
  },
  messageTimeText: {
    color: '#f60068',
  },
  messageEmailContainer: {
    left: 40,
  },
  messageEmailText: {
    fontFamily: 'OpenSans',
    color: '#008ad8',
  },
  messageTextContainer: {
    width: 244,
    height: 101,
    // borderRadius: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#fff',
    left: 63,
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(46, 145, 215, 0.33)',
  },
  messageTextShadow: {
    width: 260,
    height: 101,
    borderRadius: 4,
    shadowColor: 'rgba(46, 145, 215, 0.33)',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  messageText: {
      // justifyContent: 'center',
      // alignItems: 'center',
      // textAlign: 'justify',
      color: '#3c539a',
      // flexDirection: 'column',
      fontFamily: 'OpenSans',
      fontSize: 14,

    },
    messageTextFix: {
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
  chatWrapper: {
  },
});

export default Chat;
