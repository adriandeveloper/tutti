import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


const Header = (props) => (
    <View style={styles.container}>
      <View style={styles.textTitleContainer}>
        {/* <Text style={styles.titleFont}>tutti</Text> */}
        <Image
          style={{ width: 130, height: 130 }}
          resizeMode='contain'
          source={{ uri: 'https://image.ibb.co/etJeKk/Group_2.png' }}
        />
      </View>
      <View style={styles.gettingStartedContainer}>
        <Text style={styles.gettingStartedText}>
          {props.headerText}
        </Text>
      </View>
    </View>

  );


export default Header;
