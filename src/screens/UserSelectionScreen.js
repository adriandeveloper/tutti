import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';
// import styles from './styles';

class UserSelectionScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  onButtonPress = () => {
    Actions.roomScreen2();
  }


  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.listViewStyleContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => <View style={styles.renderRowContainer}><Text style={styles.listViewStyle}>{data}</Text></View>}


          />
        </View>
        
        <View style={styles.createRoomButtonContainer}>
          {/* <Button
            onPress={this.onButtonPress.bind(this)}
            title='Back'
            color='#fff'
          /> */}
          <TouchableOpacity
            // onPress={() => alert('puff')}
            onPress={this.onButtonPress.bind(this)}
            resizeMode="contain"
            style={styles.createRoomButton}
          >
            <View style={styles.textContainer}>
              <Text style={styles.createRoomText}>Create Room</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '$darkBlue',
  },
  listViewStyleContainer: {
    margin: 40,
    flex: 1,
  },
  listViewStyle: {
    color: '$white',
    fontFamily: 'OpenSans',
    fontSize: 24,
  },
  confirmBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
},
  renderRowContainer: {
  },
  createRoomText: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    height: 27,
    color: '$white',
  },
  textContainer: {},
  createRoomButton: {
    width: 194,
    height: 34,
    borderRadius: 5,
    backgroundColor: '$primaryPink',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  createRoomButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 35,
  },
});


export default UserSelectionScreen;
