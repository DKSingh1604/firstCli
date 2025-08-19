import React from 'react';
import { View, Text, Button } from 'react-native';
import CompanyData from './components/companyData';
import type { FC } from 'react';

const App: FC = () => {
  let data = 10;

  const fruit = (val: any) => {
    console.warn(val);
  };
  return (
    <View>
      <CompanyData />
      <Text style={{ fontSize: 30 }}>{data}</Text>
      <Button
        title="On Press"
        color={'red'}
        onPress={() => fruit('Hello DK')}
      />
      <Button title="On Press 2" color={'green'} onPress={() => fruit('Lio')} />
    </View>
  );
};

export default App;
