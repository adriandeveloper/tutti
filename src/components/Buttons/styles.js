import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$facebookColor',
    borderRadius: 3,
    height: 54,
    width: 237,
    marginTop: '8.5%',
    zIndex: 3,
  },
  icon: {},
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
  createRoomContainer: {
    width: 116,
    height: 144,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#979797',
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 50,
    marginVertical: 15,
    color: '$white',
  },
  createRoomText: {
    color: '$white',
  },
  modal: {
    height: 469,
    width: 308,
    borderRadius: 3,
    backgroundColor: '$white',
  },
  wrapper: {
    flex: 1,
    paddingTop: 40,
  },
  createRoomHeaderTxt: {
    height: 28,
    fontFamily: 'OpenSans',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#f60068',
  },
  roomNameInput: {
    width: 125,
    height: 40,
  },
  roomDesccriptionInput: {

  },
  createRoomBtn: {},
  roomImg: {},
  createRoomTxtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 17,
  },
  textinputContainer: {
    width: 125,
    top: 46,
    left: '10.4%',
  },
  imageContainer: {
    borderColor: 'pink',
    borderStyle: 'dotted',
    borderWidth: 10,
    width: 64,
    height: 67,
    top: 15,
    left: '10.7%',
  },
  image: {
    width: 64,
    height: 64,

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


});
