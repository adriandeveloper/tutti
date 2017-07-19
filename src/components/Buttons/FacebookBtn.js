import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const FacebookBtn = (props) => (
    <View style={styles.facebookButtonContainer}>
       <TouchableOpacity
         style={styles.container}
         resizeMode='contain'
       >
           <View style={styles.textContainer}>

            <View style={styles.facebookIconContainer}>
              <Icon
                name='facebook-official'
                size={20}
                style={styles.facebookIcon}
              />
          </View>
             <View style={styles.textFontContainer}>
               <Text style={styles.textFont}>{props.buttonText}</Text>
              </View>
           </View>
         </TouchableOpacity>
        <View style={styles.FacebookButtonContainerShadow} />
    </View>
);

export default FacebookBtn;
