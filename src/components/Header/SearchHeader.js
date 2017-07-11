import React from 'react';
import { View } from 'react-native';
import SearchBox from '../InputText/SearchBox';
import styles from './styles';

const SearchHeader = () => (
  <View>
    <View style={styles.searchHeaderBox}>
      <SearchBox />
    </View>

    {/* <View style={styles.createRoomContainer}>
    </View> */}

    {/* <TouchableOpacity style={styles.createRoomContainer}>
      <View >
        <Text style={styles.createRoomText}>Create a Room</Text>
      </View>
      <View>
          <Text style={styles.plusText}>+</Text>
      </View>

    </TouchableOpacity> */}
  </View>

);

export default SearchHeader;
