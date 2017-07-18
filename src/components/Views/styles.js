// import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  messageWindow: {
    // borderColor: 'red',
    // borderStyle: 'dotted',
    // borderWidth: 5,
    height: 547,
  },
  separator: {
    flex: 1,
    height: EStyleSheet.hairlinewidth,
    backgroundColor: '$white',
  },
  listItem: {
  height: 75,
  alignItems: 'center',
  justifyContent: 'center'
},
leftSwipeItem: {
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'center',
  paddingRight: 20
},
rightSwipeItem: {
  flex: 1,
  justifyContent: 'center',
  paddingLeft: 20
},

});
