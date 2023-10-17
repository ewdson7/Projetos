import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
flex-direction: row;
justify-content: center;
background-color: #ddd;
height: 200px;
flex-wrap: wrap;
`;

// criando componente de View
const Quadrado = styled.View`
background-color: ${props => props.cor};
height: 50px;
width: 50px;
`;


// criando componente View
const Pagina = styled.View`
flex: 1;
justify-content: center;
`;

export default function App() {
  return (
    <Pagina>
      <Header>
      <Quadrado  cor="red"></Quadrado>
      <Quadrado  cor="green"></Quadrado>
      <Quadrado  cor="blue"></Quadrado>
      <Quadrado  cor="yellow"></Quadrado>
      <Quadrado  cor="red"></Quadrado>
      <Quadrado  cor="green"></Quadrado>
      <Quadrado  cor="blue"></Quadrado>
      <Quadrado  cor="yellow"></Quadrado>
      <Quadrado  cor="red"></Quadrado>
      <Quadrado  cor="green"></Quadrado>
      <Quadrado  cor="blue"></Quadrado>
      <Quadrado  cor="yellow"></Quadrado>
      </Header>
     </Pagina>
  );
}
