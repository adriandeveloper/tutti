import React from 'react';
import { View } from 'react-native';
import { CreateRoomBtn2 } from '../Buttons';
// import SearchBox from '../InputText/SearchBox';
import styles from './styles';

const SearchHeader = () => (
  <View style={styles.searchHeaderBox}>
    <CreateRoomBtn2 />
  </View>
);

export default SearchHeader;
