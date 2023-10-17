import React from 'react';
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

const Retangulo = styled.View`
background-color: ${props => props.cor};
height: 80px;
width: 50px;
`;

// criando componente View
const Pagina = styled.View`
flex: 1;
justify-content: baseline;
`;

export default function App() {
  return (
    <Pagina>
      <Header>
      <Quadrado  cor="red"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="green"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="blue"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="orange"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="purple"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="red"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Quadrado  cor="red"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="green"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="blue"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="orange"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="purple"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="red"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Quadrado  cor="red"></Quadrado>
      <Quadrado  cor="green"></Quadrado>
      <Quadrado  cor="blue"></Quadrado>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Retangulo cor="orange"></Retangulo>
      <Retangulo cor="purple"></Retangulo>
      <Retangulo cor="red"></Retangulo>
      <Quadrado  cor="red"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="green"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="blue"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="orange"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="purple"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="red"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Quadrado  cor="red"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="green"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="blue"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="orange"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="purple"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="red"></Retangulo>
      <Quadrado  cor="yellow"></Quadrado>
      <Quadrado  cor="red"></Quadrado>
      <Quadrado  cor="green"></Quadrado>
      <Quadrado  cor="blue"></Quadrado>
      <Quadrado  cor="yellow"></Quadrado>
      <Retangulo cor="#cecece"></Retangulo>
      <Retangulo cor="orange"></Retangulo>
      <Retangulo cor="purple"></Retangulo>
      <Retangulo cor="red"></Retangulo>
      </Header>
     </Pagina>
  );
}
