import React from 'react';
import { View } from 'react-native';
import { CreateRoomBtn } from '../Buttons';
// import SearchBox from '../InputText/SearchBox';
import styles from './styles';

const SearchHeader = () => (
  <View style={styles.searchHeaderBox}>
    <CreateRoomBtn />
  </View>
);

export default SearchHeader;
