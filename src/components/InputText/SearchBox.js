import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const SearchBox = () => (
  <View style={styles.searchBoxContainer}>
    <TextInput
      style={styles.searchBox}
      placeholder='Search'
    />
  </View>
);

export default SearchBox;
