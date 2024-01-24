// components/ModalComponent.jsx
import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';

const Listes = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Button title="Open" onPress={toggleModal} />
      <Modal visible={modalVisible} animationType="slide" onRequestClose={toggleModal}>
        <View>
          <Text>Menu</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default Listes;
