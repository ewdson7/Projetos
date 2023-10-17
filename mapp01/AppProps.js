import React from 'react';
import styled from 'styled-components/native';

// criando componente de texto
const Texto1 = styled.Text`
color: ${props => props.cor};
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
      <Texto1 cor="red">Texto do exemplo</Texto1>
      <Texto1 cor="black">Outro Texto</Texto1>

     </Pagina>
  );
}
