import React, { Component } from 'react';
import { View, Text, ListView, Button } from 'react-native';
import CheckBox from 'react-native-check-box';
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
    Actions.roomScreen();
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

        <View style={styles.confirmBtn}>
          <Button
            onPress={this.onButtonPress.bind(this)}
            title='Back'
            color='#fff'
          />
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkboxContainer: {
    top: 3,
    marginRight: 4,
  },
  // checkBoxStyle: {
  //   color: '#fff',
  // }
});


export default UserSelectionScreen;
