import React from 'react';
import { View, Text, Keyboard} from 'react-native';
import { useState, useRef, useEffect,  } from 'react';
import api from '../../services/api'
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

const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 10px;
  margin-top: 20px;
  justify-content: center;
`;
const Input = styled.TextInput`
  height: 60px;
  font-size: 18px;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  border-color: #2980b9;
  border-width: 4px;
  padding: 5px;
  text-align: center;
`;

const TextInput = styled.Text`
font-size: 18;

`;
const InputText = styled.Text`
  font-size: 18px;
  flex: 1;
  color: ${props => props.value ? 'black' : '#9e9e9e'};
  text-align: center;
`;
const InputWrapper = styled.View`
  height: 60px;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  border-color: #2980b9;
  border-width: 4px;
  padding: 5px;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


const ButtonContainer = styled.View`
  margin-top: 30px;
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
`;
export default function Euro({navigation}) {
  const [realValue, setRealValue] = useState('');
  const [euroValue, setEuroValue] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const converteRealEuro = async () => {
    if (!realValue || parseFloat(realValue.replace(',', '.')) === 0) {
      Alert.alert('Erro', 'Informe um valor válido em Real');
      return;
    }

    try {
      const response = await api.get('/last/EUR-BRL');
      const euroRate = response.data.EURBRL.high;
      const convertedValue = (parseFloat(realValue.replace(',', '.')) / parseFloat(euroRate)).toFixed(2);
      const convertedValueWithComma = convertedValue.replace('.', ',');
      setEuroValue(convertedValueWithComma);
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro na conversão. Por favor, tente novamente.');
    }
  };
  const handleClear = () => {
    setRealValue('');
    setEuroValue('');
    inputRef.current.focus();
    Keyboard.dismiss();
  };
  return (
    <Container>
    <HeaderText>
      <Title>Conversão para Euro</Title>
    </HeaderText>
    <InputContainer>
        <Input
        ref={inputRef}
          placeholder="Entre com o valor em Real"
          keyboardType="numeric"
          value={realValue}
          onChangeText={value => setRealValue(value)}
        />
        <TextInput
          style={{ position: 'absolute', opacity: 0 }}
          keyboardType="numeric"
          value={realValue}
          onChangeText={value => setRealValue(value)}
          />
        
      </InputContainer>
      <ButtonContainer>
      <Button color= '#30ad23' onPress={converteRealEuro}>
        <Text style = {{fontSize: 22, color: 'white'}}>Converter</Text>
      </Button>
    </ButtonContainer>
    {euroValue !== '' && (
        <InputContainer>
          <InputWrapper>
            <InputText>{euroValue ? `€ ${euroValue}` : '€ Valor em Euro'}</InputText>
          </InputWrapper>
        </InputContainer>
      )}

      <ButtonContainer>
      <Button color= 'red' onPress={handleClear}>
        <Text style = {{fontSize: 22, color: 'white'}}>Limpar</Text>
      </Button>
    </ButtonContainer>

<ButtonContainer>
  <Button color="#2980b9" onPress={()=>navigation.navigate('Dolar')}>
    <Text style={{fontSize: 22, color: 'white'}}>Converter para Dolar</Text>
  </Button>
</ButtonContainer>
<ButtonContainer>
  <Button color="#2980b9" onPress={()=>navigation.navigate('Home')}>
    <Text style={{fontSize: 22, color: 'white'}}> Menu Principal</Text>
  </Button>
</ButtonContainer>
   </Container>
  );
}
