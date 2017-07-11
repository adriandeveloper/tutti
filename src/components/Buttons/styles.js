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

});
