
import React from 'react';
import { TextInput, Button } from 'react-native-paper';

const FormComponent = () => {
  return (
    <View>
      <TextInput label="Nom" />
      <TextInput label="Prénom" />
      <TextInput label="Email" />
      <TextInput label="Mot de passe" secureTextEntry={true} />
      <TextInput label="Confirmer le mot de passe" secureTextEntry={true} />
      <Button mode="contained" onPress={() => console.log('Inscription réussie')}>
        S'inscrire
      </Button>
    </View>
  );
};

export default FormComponent;
