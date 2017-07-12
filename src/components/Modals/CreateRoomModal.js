import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import { View, Text } from 'react-native';
import styles from './styles';


class CreateRoomModal extends Component {

constructor() {
  super();
  this.state = { isOpen: false, isDisabled: false, swipeToClose: true, };
}

onClose() {
  console.log('bitch be closed');
}

onOpen() {
console.log('bitch be open');
}


render() {
return (

    <Modal
      style={styles.modal}
      position={'center'}
      ref={'modal'}
      isDisabled={this.state.isDisabled}
    >
      <View>
        <Text>Test</Text>
      </View>
    </Modal>


  );
}
}

export default CreateRoomModal;
