import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TabelaCursos from '@react-native-async-storage/async-storage';



export default function App() {
  const [curso, setCurso] = useState(null)

  //funcao de armazenamento de dados
  //recebe e grava chave / valor
  const Armazenar = (chave, valor) => {
    //não precisa de async await - armazenamento
    TabelaCursos.setItem(chave, valor)

  }

  //funcao de leitura de dados
  //recebe a chave e retorna o valor
  const Buscar = async(chave) => {
    const valor = await TabelaCursos.getItem(chave)
    //valor é gravado na variavel curso
   //poderia ter usado de outra forma(mostrar na tela, etc.)
   setCurso(valor) 
  }
//***************exemplo simples de uso***************
// gravando dados
Armazenar('01', 'Eng.Software')
Armazenar('02', 'Eng.Produção')
Armazenar('03', 'Geografia')
Armazenar('04', 'Tec. Alimentos')

//deletando toda tabela
//TabelaCursos.clear()
//deletando um item especifico
//TabelaCursos.removeItem('04')

Buscar('04')

  return (
    <View style = {estilos.container}>
      <Text style = {estilos.text}>Armazenamento Local / Async Storage</Text>
      <Text style = {estilos.text}>Curso: {curso} </Text>
     </View>
  );
}

const estilos = StyleSheet.create({
container : {
  flex: 1,
  backgroundColor: "black",
 justifyContent: "center"
  },
  text : {
    fontSize: 18,
    color: "white"
  }
})
