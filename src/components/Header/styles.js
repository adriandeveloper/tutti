import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  gettingStartedContainer: {},
  gettingStartedText: {
    fontFamily: 'Open Sans',
    fontSize: 23,
    fontWeight: '300',
    color: '$textColor',
  },
  icon: {},
  textTitleContainer: {
    marginVertical: '7.5%',
  },
  titleFont: {
    fontFamily: 'Open Sans',
    fontSize: 41,
    fontWeight: 'bold',
    letterSpacing: -0.71,
    color: '$textColor',
  },
  searchHeaderBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    // position: 'relative',
    // borderColor: 'red',
    // borderStyle: 'dotted',
    // borderWidth: 5,
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
  }
});
