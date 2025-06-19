/* ZONA 1: IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, {useState} from 'react';

const Texto = ({style}) => {
  const [contenido, setContenido] = useState("Hola Mundo RNative"); 
  const actualizaTexto = () => {setContenido('ESTADO ACTUALIZADO DEL TEXT')}
  return (
    <View Style = {{margin: 10}}>
      <Text Style = {[styles.text, style]}>{contenido}</Text>
      <Button title = "Actualizar Texto" onPress = {actualizaTexto} color = "red"/>
    </View>
  )
}

const[isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

/* ZONA2: MAIN */
export default function App() {
  return (
    <View style={styles.container}>
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
