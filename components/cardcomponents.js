
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = () => (
  <Card style={StyleSheet.container}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default CardComponent;

const styles = StyleSheet.create({
    container: {
      width: '100vw',
      height: '100vw',
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });