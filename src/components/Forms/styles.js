import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$offWhite',
    width: 296,
    height: 316,
    borderRadius: 4,
    // marginBottom: 40,
    bottom: 30,
    zIndex: 1,
  },
  textField: {
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  textInput: {
    height: 31,
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 10,
  },
  textFieldContainer: {
    width: 230,
    left: 31,
    // borderColor: 'pink',
    // borderStyle: 'dotted',
    // borderWidth: 10,
  },
  textContainerField: {
    top: '18%',
    marginVertical: -13,
    // borderColor: 'pink',
    // borderStyle: 'dotted',
    // borderWidth: 10,
  },
  createAccountText: {
    height: 24,
    width: 124,
    fontFamily: 'OpenSans',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    color: '$primaryPink',
    bottom: 33,
  },
});
