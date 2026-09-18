import { View, TouchableOpacity } from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

export default function App(){

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Feather 
        name="bluetooth"
        size={45}
        color= "#87CEFA"
      />

      <FontAwesome6 
        iconStyle="solid"
        name="moon"
        size={45}
        color="#F0FFFF"
      />

      <TouchableOpacity 
      style={{ backgroundColor: 'black', width: 100, borderRadius: 5, alignItems: 'center' }}>
        <Feather 
          name="video"
          size={60}
          color="white"
        />
      </TouchableOpacity>
    </View>
  ) 
}
