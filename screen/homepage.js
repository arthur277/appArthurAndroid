import {StyleSheet, Text, View} from 'react-native';
import CardComponent from '../components/cardcomponents';
import NavComponent from '../components/navcomponents'
import ProgressComponent from '../components/progressbarcomponents';
import TextInputComponent from '../components/bouton'

const HomePage = () => {
    return <View style={StyleSheet.container}>
        
        <NavComponent />
        <ProgressComponent />
        <CardComponent />
        <TextInputComponent />
    </View>
}

export default HomePage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });