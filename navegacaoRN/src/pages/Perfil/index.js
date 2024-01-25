import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Perfil({navigation}) {
  return (
    <View>
      <Text> Perfil </Text>

      <Button
      title='Home'
      onPress={() => navigation.navigate('Home')}/>
      <Button
      title='Sobre'
      onPress={() => navigation.navigate('Sobre')}/>

     </View>
  );
}
