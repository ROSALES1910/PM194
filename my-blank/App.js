/* ZONA 1: IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const Texto = ({style}) => {
  const [contenido, setContenido] = useState("Hola Mundo RNative"); 
  const actualizaTexto = () => {setContenido('ESTADO ACTUALIZADO DEL TEXT')}
  return (
    <View>
      <Text style = {[styles.text, style]} onPress={actualizaTexto}>{contenido}</Text>
    </View>
  );
};

/* ZONA2: MAIN */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style = {styles.red}></Texto>
      <Texto style = {styles.blue}></Texto>
      <Texto style = {styles.green}></Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/* ZONA 3: ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color:'white',
    fontSize: 27,
  },
  red:{backgroundColor: 'red'},
  blue:{backgroundColor: 'blue'},
  green:{backgroundColor: 'green'}
});
