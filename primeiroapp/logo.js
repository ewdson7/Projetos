import React from 'react';
import { View, Text, Image } from 'react-native';

export default function app() {
  let nome = 'Campus xx - Castanhal';
  let img = 'https://www.google.com.br/google.jpg';
  return (
    <View>
      <Text>Olá Mundo!!!</Text>
      <Text>Meu Primeiro App</Text>
      <Text style = {{color: '#FF0000', fontSize: 25, margin: 15}}>UEPA - BES</Text>

      <Image
      source = {{uri: img}}
      style = {{width: 300, height: 300}}
      resizeMode='center'
      />

      <Text style={{ fontSize: 30}}> {nome} </Text>
     </View>
  );
}
