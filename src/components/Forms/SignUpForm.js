import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import styles from './styles';

const SignUpForm = () => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>OR</Text>
    </View>

    <ScrollView >
      <View>
        <TextField
          autoCorrect={false}
          enablesReturnKeyAutomatically
          highlightColor={'#FF456E'}
          label={'username'}
          style={styles.textInput}
          value={this.state.text}
          // onChangeText={text => this.setState){ text }}
        />
      </View>
        <TextField
          autoCorrect={false}
          enablesReturnKeyAutomatically
          highlightColor={'#FF456E'}
          label={'email'}
          style={styles.textInput}
        />
      <View>
        <TextField
          autoCorrect={false}
          enablesReturnKeyAutomatically
          highlightColor={'#FF456E'}
          label={'password'}
          style={styles.textInput}
        />
      </View>
      <View>
        <TextField
          autoCorrect={false}
          enablesReturnKeyAutomatically
          highlightColor={'#FF456E'}
          label={'retype password'}
          style={styles.textInput}
        />
      </View>
    </ScrollView>
  </View>
);

export default SignUpForm;
