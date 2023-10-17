import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';

// criando componente de texto
const Texto1 = styled.Text`
color: #ff0000;
font-size: 30px;
background-color: #00ff00;
margin-top: 100px;
`;

// criando componente de texto
const Texto2 = styled.Text`
color: #ffff00;
font-size: 30px;
background-color: #00ff00;

`;

// criando componente view
const Pagina = styled.View`
flex: 1;
background-color: #0000ff;

`;

export default function App() {
  return (
    <Pagina>
      <Texto1>Texto do exemplo</Texto1>
      <Texto2>Outro Texto</Texto2>

     </Pagina>
  );
}
