import React from 'react';

import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Detalhes() {

  const navigation = useNavigation();

  function handleHomeNovamente(){
    navigation.navigate('HomeStack', {screen: 'Home'});
  }

 return (
   <View>
    <Text>Detalhes</Text>
    <Button 
    color='#1E90FF' 
    title="Voltar a Home"
    onPress={handleHomeNovamente}
    />
   </View>
  );
}