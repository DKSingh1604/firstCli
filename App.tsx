/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { View, TextInput, Text, Button, SafeAreaView } from 'react-native';
import ExStyles from './css/styles';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setDisplay(false);
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <SafeAreaView style={{ backgroundColor: 'grey', flex: 1 }}>
      <View>
        <Text style={{ margin: 50, fontSize: 25 }}>
          {'Simple form in react Native'}
        </Text>
        <TextInput
          style={ExStyles.textbox}
          placeholder="Enter Username"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={ExStyles.textbox}
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={ExStyles.textbox}
          placeholder="Enter Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <View style={{ margin: 5, padding: 10 }}>
          <Button
            color={'green'}
            title="Print value"
            onPress={() => setDisplay(true)}
          />
        </View>
        <View style={{ margin: 5, padding: 10 }}>
          <Button color={'red'} title="Clear details" onPress={resetFormData} />
        </View>
        <View>
          {display ? (
            <View>
              <Text style={{ fontSize: 20, margin: 12 }}>
                username is: {name}
              </Text>
              <Text style={{ fontSize: 20, margin: 12 }}>
                Password is: {password}
              </Text>
              <Text style={{ fontSize: 20, margin: 12 }}>
                Email is: {email}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
