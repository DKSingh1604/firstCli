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

class StudentComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.updateProps = this.updateProps.bind(this);
  }
  updateProps() {
    console.warn(this.props);
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, color: 'red' }}>Student Component</Text>
        <Button title="Press me" onPress={this.updateProps} />
      </View>
    );
  }
}
export default StudentComponent;
