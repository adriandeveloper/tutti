import React from 'react';
import { View } from 'react-native';
import SearchBox from '../InputText/SearchBox';
import styles from './styles';

const SearchHeader = () => (
  <View style={styles.searchHeaderBox}>
    <SearchBox />
  </View>
);

export default SearchHeader;
