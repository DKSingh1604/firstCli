/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native';
import ExStyles from './css/styles';
const App = () => {
  const users = [
    {
      id: 1,
      name: 'DevKaran',
    },
    {
      id: 2,
      name: 'Peter',
    },
    {
      id: 3,
      name: 'Donald',
    },
    {
      id: 4,
      name: 'Garry',
    },
    {
      id: 5,
      name: 'Harry',
    },
    {
      id: 6,
      name: 'Larry',
    },
    {
      id: 7,
      name: 'Morry',
    },
    {
      id: 8,
      name: 'Tony',
    },
    {
      id: 9,
      name: 'Stark',
    },
    {
      id: 10,
      name: 'Steve',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 23,
              borderWidth: 3,
              borderColor: 'blue',
              margin: 20,
              padding: 10,
            }}
          >
            Learning Grid with Dynamic Data
          </Text>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {users.map(item => (
              <Text style={ExStyles.gridElement}>{item.name}</Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
