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
    height: 80,
  },
  chatHeaderContainer: {
    top: 10,
    left: 112,
  },
  chatHeaderText: {
    fontFamily: 'OpenSans',
    fontSize: 14,
    color: '$primaryPink',
    fontWeight: 'bold',
  },
  chatWrapper: {
    height: 60,
    flexDirection: 'row',
    top: 15,
    left: 15,
  },
  icon: {
    top: 8,
    color: '$primaryPink',
  },

});
