import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView } from 'react-native';
import CheckBox from 'react-native-check-box';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';
// import styles from './styles';

class UserSelectionScreen extends Component {

  constructor(props) {
    super(props);

    const emails = ['noni@test.com', 'frank@frankg.com', 'zfredrick@bank.net', 'alexThomas@ourlook.com'];

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(emails),
    };
  }

  onButtonPress = () => {
    Actions.roomScreen2();
  }

  onClick = () => {
    console.log('clicked');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.listViewStyleContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => <View style={styles.renderRowContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  onClick={() => this.onClick()}
                  isChecked={data.checked}
                  style={styles.checkBoxStyle}
                  checkdColor
                  uncheckedColor
                />
              </View>
              <Text style={styles.listViewStyle}>{data}</Text>
            </View>
            }


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
    backgroundColor: '$white',
  },
  listViewStyleContainer: {
    margin: 40,
    flex: 1,
  },
  listViewStyle: {
    color: '$black',
    fontFamily: 'OpenSans',
    fontSize: 19,
  },
  confirmBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
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
  renderRowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkboxContainer: {
    top: 3,
    marginRight: 4,
  },
  // ch
});


export default UserSelectionScreen;
