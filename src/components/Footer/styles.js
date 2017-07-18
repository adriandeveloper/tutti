import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
  },
  signUpText: {
    color: '$primaryPink',
  },
  haveAccountText: {
    color: '$white',
    fontFamily: 'OpenSans',
    height: 24,
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    bottom: 10,
  },
  needAccount: {
    fontWeight: '300',
    fontFamily: 'OpenSans',
    fontSize: 15,
    top: 10,
  },
  chatFooterContainer: {
    width: 375,
    height: 60,
    position: 'relative',
    backgroundColor: '$white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: 'pink',
    // borderStyle: 'dotted',
    // borderWidth: 5,
  },
  messageInput: {
    height: 40,
    width: 255,
    // borderColor: 'red',
    // borderStyle: 'dotted',
    // borderWidth: 5,
  },
  sendButton: {
  },
  sendButtonContainer: {
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'blue',
    // borderStyle: 'dotted',
    // borderWidth: 5,
  },
  messageInputContainer: {
    width: 275,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderStyle: 'dotted',
    // borderWidth: 5,
    paddingLeft: 10,
  },
  sendIcon: {
    color: '$primaryPink',
  },
  sendIconContainer: {
    // borderColor: 'pink',
    // borderStyle: 'dotted',
    // borderWidth: 5,
    marginRight: 40,

  },
});
