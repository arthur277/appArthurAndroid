import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
 
const TextInputComponent = () => {
  const [inputText, setInputText] = useState('');
  const [savedText, setSavedText] = useState('');
 
  const handleSaveButtonPress = () => {
    setSavedText(inputText);
  };
 
  return (
    <View style={styles.container}>
      <Text>Entrez votre texte :</Text>
      <TextInput
        style={styles.input}
        placeholder="Saisissez ici"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Enregistrer" marginTop='80px
      ' onPress={handleSaveButtonPress} />
     
      <Text>Texte enregistré : {savedText}</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 80,
    width: 200,
  },
});
 
export default TextInputComponent;