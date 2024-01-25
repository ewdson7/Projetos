import React from 'react';
import { View, Text, TextInput, StatusBar, TouchableOpacity, Alert, Keyboard } from 'react-native';
import styled from 'styled-components/native';
const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.View`
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: #2980b9;
  width: 100%;
  margin-bottom: 10px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
 
  
`;
const ButtonContainer = styled.View`
  margin-top: 50px;
  width: 60%;
  justify-content: center;
`;
const Button = styled.TouchableOpacity`
  height: 60px;
  background-color: ${props => props.color};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 18px;
  height: 80px;
`;


export default function Home({navigation}) {
  return (
<Container>
<HeaderText>
  <Title>Conversor de moedas</Title>
  <Title>do aluno Ewdson Tiago</Title>
</HeaderText>
<ButtonContainer>
<Button color="#2980b9" onPress={()=>navigation.navigate('Dolar')}><Text style={{color: 'white', fontSize: 20}}>Converter Para Dolar</Text></Button>
</ButtonContainer>
<ButtonContainer>
<Button color="#2980b9" onPress={()=>navigation.navigate('Euro')}><Text style={{color: 'white', fontSize: 20}}>Converter Para Euro</Text></Button>
</ButtonContainer>
</Container>

  );
}
