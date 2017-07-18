// import React, { Component } from 'react';
// import { View, Text, ListView } from 'react-native';
// import Swipeable from 'react-native-swipeable';
// import styles from './styles';
//
// const leftContent = <Text>Test</Text>;
// class UserSelection extends Component {
//   constructor(props) {
//     super(props);
//
//     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//     this.state = {
//       dataSource: ds.cloneWithRows(['row 1', 'row 2']),
//     };
//   }
//
//
//   render() {
//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={(data) => <View>
//           <Swipeable leftContent={leftContent}>
//             <Text>
//               {data}
//             </Text>
//           </Swipeable>
//         </View>}
//         renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
//       />
//     );
//   }
// }
//
// export default UserSelection;
