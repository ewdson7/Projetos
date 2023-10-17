import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style = {estilo.pagina}>
      <Text>Olá Mundo</Text>
     </View>
  );
}
//criando a constante estilo
//que vai receber um objeto StyleSheet
const estilo = StyleSheet.create({
  pagina: {
    width: 200,
    height: 200,
    backgroundColor: '#FF0000'
  }
})