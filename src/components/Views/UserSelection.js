import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import Checkbox from 'react-native-checkbox';
import styles from './styles';

class UserSelection extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  // const leftText = data.name;

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <View>
          <Text>
            <Checkbox
              label='label'
              checked
            />
              {data}
          </Text>
        </View>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

export default UserSelection;
