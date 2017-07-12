import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$offWhite',
    width: 296,
    height: 316,
    borderRadius: 4,
    bottom: 45,
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
  },
  textFieldContainer: {
    width: 230,
    left: 31,
  },
  textContainerField: {
    top: '18%',
    marginVertical: -13,
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
  containerShadow: {
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
