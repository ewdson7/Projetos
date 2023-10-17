import React from 'react';
import styled from 'styled-components/native';

// criando componente de View
const Quadrado = styled.View`
background-color: ${props => props.cor};
height: 50px;
width: 50px;
`;


// criando componente View
const Pagina = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-around;
`;

export default function App() {
  return (
    <Pagina>
      <Quadrado  cor="red"></Quadrado>
      <Quadrado  cor="green"></Quadrado>
      <Quadrado  cor="blue"></Quadrado>
      <Quadrado  cor="yellow"></Quadrado>
     </Pagina>
  );
}
