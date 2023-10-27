import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('')
  const [result, setResult] = useState([])
  function executarCalculos(){
    //const alt = altura / 100;
   
  

   if(sexo == 'm'){
    const PesoIdealMasc = 52 + (0.75 *(altura - 152.4))
   const pesoIdealAjustado = ((peso - PesoIdealMasc)*0.25)+ PesoIdealMasc;
   setResult("Peso ideal: "+PesoIdealMasc.toFixed(2) + " kg \n" + "Peso ideal Ajustado: "+pesoIdealAjustado.toFixed(2))
   }
   if (sexo == 'f') {
    const PesoIdealFem = 52 + (0.67 * (altura - 152.4))
    let pesoIdealAjustado = ((peso - PesoIdealFem)*0.25)+ PesoIdealFem;
    setResult("Peso ideal: "+PesoIdealFem.toFixed(2) + " kg \n" + "Peso ideal Ajustado: "+pesoIdealAjustado.toFixed(2))

  }
setAltura('')
setPeso('')
setSexo('')

  }
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcule o IMC </Text>
      <TextInput 
        style= {estilo.input}
        value= {peso} //valor do componentes
        onChangeText={ (peso) => setPeso(peso) } //toda vez que o campo mudar ele é salvo
        placeholder="Peso (kg)"
        keyboardType='numeric'

        />
        <TextInput 
        style= {estilo.input}
        value= {altura} //valor do componentes
        onChangeText={ (altura) => setAltura(altura) } //toda vez que o campo mudar ele é salvo
        placeholder="Altura (cm)"
        keyboardType='numeric'
        />
        <TextInput 
        style= {estilo.input}
        value= {sexo} //valor do componentes
        onChangeText={ (sexo) => setSexo(sexo) } //toda vez que o campo mudar ele é salvo
        placeholder="Sexo(M/F)"

        />
        <TouchableOpacity style = {estilo.botao}
        onPress={executarCalculos}>
          <Text style = {estilo.textoBotao}>Calcular</Text>
        </TouchableOpacity>
        <Text style = {estilo.textResult}>
        {result}
        </Text>
     </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1
  },
  textResult:{
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 30
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23  
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: 'black',
    padding: 10,
  },
  textoBotao:{
    color: '#fff',
    fontSize: 22.5,
  }
});
