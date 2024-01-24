// components/ListComponent.jsx
import React from 'react';
import { List } from 'react-native-paper';

const NameList = [
  { prenom: 'Devin' },
  { prenom: 'Dan' },
  { prenom: 'Dominic' },
  { prenom: 'Jackson' },
  { prenom: 'James' },
  { prenom: 'Joel' },
  { prenom: 'John' },
  { prenom: 'Jillian' },
  { prenom: 'Jimmy' },
  { prenom: 'Julie' },
];

const ListComponent = () => {
  return (
    <List.Section>
      {NameList.map((item, index) => (
        <List.Item key={index} title={item.prenom} />
      ))}
    </List.Section>
  );
};

export default ListComponent;
