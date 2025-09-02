/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('Peter');

  return (
    <View
      style={{
        backgroundColor: 'red',
        margin: 10,
      }}
    >
      <Text style={{ fontSize: 30 }}>Props in React Native</Text>
      <Button title="Update Props" onPress={() => setName('Dev Karan  ')} />
      <User name={name} age={29} />
    </View>
  );
};

const User = (props: { name: string; age: number }) => {
  console.log(props);
  return (
    <View style={{ backgroundColor: 'green', padding: 5 }}>
      <Text style={{ fontSize: 30 }}>
        {props.name + ' is ' + props.age + ' years old.'}
      </Text>
    </View>
  );
};

export default App;
