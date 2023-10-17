import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
flex-direction: row;
justify-content: center;
background-color: #ddd;
height: 500px;
flex-wrap: wrap;
align-items: flex-end;

`;

// criando componente de View
const Quadrado = styled.View`
background-color: ${props => props.cor};
height: 150px;
width: 150px;
justify-content: center;
align-items: center;
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
      <Quadrado  cor="green">
      <Image source = {require('./src/imagens/images.jpg')}
      style = {{ width: 140, height: 140, backgroundColor: '#aaa'}}
      />
      </Quadrado>
      <Quadrado  cor="blue">
      <Image source = {{uri: 'https://www.google.com.br/google.jpg'}}
      style = {{ width: 100, height: 100, backgroundColor: '#aaa'}}
      resizeMode='center'
      />
      </Quadrado>
      <Quadrado  cor="yellow"></Quadrado>
      </Header>
     </Pagina>
  );
}
