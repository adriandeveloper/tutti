import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$facebookColor',
    borderRadius: 3,
    height: 54,
    width: 237,
    marginTop: '8.5%',
    // borderColor: 'pink',
    // borderStyle: 'dotted',
    // borderWidth: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 469,
    width: 308,
    borderRadius: 3,
    backgroundColor: '$white',
  },
  wrapper: {
    flex: 1,
    paddingTop: 40,
  },
});
