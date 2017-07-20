import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  gettingStartedContainer: {
    top: 32,
  },
  gettingStartedText: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: '300',
    color: '$textColor',
  },
  textTitleContainer: {
      top: 30,
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
    // alignItems: 'center',
    height: 80,
    // position: 'relative',
    // borderColor: 'red',
    // borderStyle: 'dotted',
    // borderWidth: 5,
  },
  chatHeaderContainer: {
    // elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 375,
    opacity: 0.75,
    backgroundColor: '$white',
    shadowColor: 'rgba(98, 88, 88, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    position: 'relative',
  },

});
