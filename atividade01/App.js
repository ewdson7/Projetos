import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Texto = styled.Text`
font-size: 20pt;
padding: 20px;
text-align: center;
color: white;
`;

const Header = styled.View`
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
`;

// criando componente de View
const Quadrado = styled.View`
background-color: ${props => props.cor};
height: 150px;
width: 150px;
`;

const Retangulo = styled.View`
background-color: ${props => props.cor};
height: 200px;
width: 180px;
`;

// criando componente View
const Pagina = styled.View`
flex: 1;
justify-content: center;
background-color: blue;

`;

export default function App() {
  return (
    <Pagina>
        <Texto>Galeria de imagem do Ewdson Tiago</Texto>
        <Texto>Uepa / google</Texto>
      <Header>

      <Quadrado cor = "Blue">
      <Image source = {require('./src/image/download.jpg')}
      style = {{ width: 140, height: 140, backgroundColor: '#aaa'}}
      resizeMode='cover'/>
      </Quadrado>
      <Quadrado cor = "Blue">
      <Image source = {require('./src/image/uepa.jpg')}
      style = {{ width: 140, height: 140, backgroundColor: '#aaa'}}
      resizeMode='stretch'/>
      </Quadrado>
      <Quadrado cor = "Blue">
      <Image source = {require('./src/image/uepa2.jpg')}
      style = {{ width: 140, height: 140, backgroundColor: '#aaa'}}
      resizeMode='stretch'/>
      </Quadrado>
      <Quadrado cor = "Blue">
      <Image source = {require('./src/image/download.png')}
      style = {{ width: 140, height: 140, backgroundColor: '#aaa'}}
      resizeMode='stretch'/>
      </Quadrado>
      <Retangulo cor = "Blue">
      <Image source = {{uri: 'https://www.google.com.br/google.jpg'}}
      style = {{ width: 290, height:100, backgroundColor: '#aaa', marginLeft: -60}}
      resizeMode='stretch'
      />
      </Retangulo>
      </Header>
     </Pagina>
  );
}
