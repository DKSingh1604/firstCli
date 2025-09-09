/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import ExStyles from './css/styles';
import UserData from './components/userData';
const App = () => {
  const users = [
    {
      id: 1,
      name: 'DevKaran',
      email: 'devkaran@example.com',
      age: 25,
      data: ['reactjs', 'angular'],
    },
    {
      id: 2,
      name: 'Peter',
      email: 'peter@example.com',
      age: 28,
      data: ['reactjs', 'nodejs'],
    },
    {
      id: 3,
      name: 'Donald',
      email: 'donald@example.com',
      age: 32,
      data: ['java', 'angular'],
    },
    {
      id: 4,
      name: 'Garry',
      email: 'garry@example.com',
      age: 27,
      data: ['reactjs', 'php'],
    },
    {
      id: 5,
      name: 'Harry',
      email: 'harry@example.com',
      age: 30,
      data: ['html', 'angular'],
    },
    {
      id: 6,
      name: 'Larry',
      email: 'larry@example.com',
      age: 26,
      data: ['reactjs', 'css'],
    },
    {
      id: 7,
      name: 'Morry',
      email: 'morry@example.com',
      age: 29,
    },
    {
      id: 8,
      name: 'Tony',
      email: 'tony@example.com',
      age: 31,
    },
    {
      id: 9,
      name: 'Stark',
      email: 'stark@example.com',
      age: 35,
    },
    {
      id: 10,
      name: 'Steve',
      email: 'steve@example.com',
      age: 33,
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
        <View style={{ marginBottom: 100 }}>
          <Text style={ExStyles.button}>Learning Grid with Dynamic Data</Text>
          <FlatList
            data={users}
            renderItem={({ item }) => <UserData item={item} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
