
import React from 'react';
import { Button } from 'react-native-paper';

const Buttons = ({ label, onPress, color }) => {
  return (
    <Button mode="contained" onPress={onPress} color={color}>
      {label}
    </Button>
  );
};

export default Buttons;
