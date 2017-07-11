import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
  },
  textInput: {
    height: 40,
    width: 237,
  },
  inputFieldContainer: {
    marginVertical: '10%',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 10,
  },
  errorTextStyle: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'red'
  },

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
  searchBox: {
    width: 308,
    height: 29,
    borderRadius: 4,
    backgroundColor: '#3B4152',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  searchBoxContainer: {
    // opacity: 0.07,
  },

});
