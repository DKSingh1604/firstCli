/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import React, { Component } from 'react';
import StudentComponent from './components/studentComponent';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Dev',
      age: 20,
    };
  }

  updateName(val: string) {
    this.setState({ name: val });
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <View>
          <Text style={{ fontSize: 30 }}>{this.state.name}</Text>
          <TextInput
            placeholder="Enter your name"
            onChangeText={text => this.updateName(text)}
          />
          <Button title="Press me" onPress={() => {}} />
          <StudentComponent name={this.state.name} />
        </View>
      </SafeAreaView>
    );
  }
}
export default App;
