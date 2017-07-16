import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  addFriendsButtonContainer: {
    left: 140,
    top: 10,
    borderColor: '$black',
    borderWidth: 1,
    borderStyle: 'solid',
    height: 28,
    width: 28,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addFriendsContainer: {
    top: 60,
  },
  addFriendsAndImageText: {
    fontFamily: 'OpenSans',
    fontSize: 14,
    color: '#9b9b9b',
    textAlign: 'center',
  },
  addImageContainer: {
    top: 90,
  },
  container: {
    backgroundColor: '$facebookColor',
    borderRadius: 3,
    height: 54,
    width: 237,
    marginTop: '8.5%',
    zIndex: 3,
  },
  createRoomButtonContainer: {
    top: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createRoomButton: {
    width: 194,
    height: 34,
    borderRadius: 5,
    backgroundColor: '$primaryPink',
    margin: 8,
  },
  createRoomHeaderContainer: {
    top: 38,
  },
  createRoomHeaderTxt: {
    textAlign: 'center',
    fontFamily: 'OpenSans',
    fontSize: 18,
    color: '$primaryPink',
    fontWeight: '600',
  },
  createRoomText: {
    textAlign: 'center',
    fontFamily: 'OpenSans',
    fontSize: 20,
    color: '$white',

  },
  FacebookButtonContainerShadow: {
    shadowColor: 'rgba(55,77,144,0.4)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 7,
    shadowOpacity: 1,
    alignItems: 'center',
    width: 217,
    height: 14,
    bottom: 14,
    zIndex: 2,
  },
  facebookButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    // top: 15,
  },
  headerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    right: 40,
    top: 1,
  },
  icon: {
    color: '$white',
  },
  icon2: {
    color: '$black',
  },
  logoutContainer: {
    left: 40,
  },
  logoutTxt: {
      color: '$white',
      fontFamily: 'OpenSans',
      fontSize: 15,
      fontWeight: '600',
  },
  loginContainer: {
    backgroundColor: '$primaryBlue',
    borderRadius: 3,
    height: 54,
    width: 237,
    marginTop: '7.5%',
  },
  loginTextFont: {
    color: '$white',
    fontFamily: 'Open Sans',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 10,
  },
  modal: {
    width: 308,
    height: 469,
    borderRadius: 3,
    backgroundColor: '$white',
  },
  roomContainer: {
    top: 40,
    width: 192,
    left: 58,

  },
  roomDescInput: {
    height: 33,
  },
  roomNameInput: {
    height: 33,
  },
  textHeadersContainer: {

    // marginVertical: -30,
    marginTop: -50,
    top: 300,
  },
  textHeader: {
    fontFamily: 'OpenSans',
    fontSize: 23,
    fontWeight: '300',
    textAlign: 'center',
    color: '#777577',

  },
  textSubHeader: {
    fontFamily: 'OpenSans',
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '300',
    color: '#777577',
  },
  textContainer: {
    marginTop: 18,
  },
  textFont: {
    color: '$white',
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '300',
    textAlign: 'center',
  },


});
