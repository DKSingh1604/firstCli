import { View, Text } from 'react-native';
import ExStyles from '../css/styles';

const UserData = (props: { item: any }) => {
  const item = props.item;
  return (
    <View style={ExStyles.textbox}>
      <View style={{ flex: 1 }}>
        <Text style={ExStyles.gridElement}>{item.name}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={ExStyles.gridElement}>{item.email}</Text>
      </View>
    </View>
  );
};

export default UserData;
