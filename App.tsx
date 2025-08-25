/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('DevKaran');
  let data = 'Sam';
  function testName() {
    setName('Dev Karan Singh');
    data = 'Peter';
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30 }}>{data}</Text>
      <Button title="Update Name" onPress={testName}></Button>
    </View>
  );
};

export default App;
