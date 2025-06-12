/* ZONA 1:  IMPORTACIONES*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


const Boton = () => {
   const [contenido, setContenido] = useState("Presiona el botón"); //se inicializa el estado del botón
   const actualizaButton = () => {setContenido('ESTADO ACTUALIZADO DEL BOTÓN')} //se va mandar llamar cuando presionemos el botón
    return (
      <Button title = {contenido} onPress={actualizaButton}> {contenido} </Button>
    )
};

const Texto = () => {
  const [contenido, setContenido] = useState("Hola Mundo RNative"); 
  const actualizaTexto = () => {setContenido('ESTADO ACTUALIZADO DEL TEXT')} //se va mandar llamar cuando presionemos el botón
  return (
    <View>
      <Text onPress={actualizaTexto}>{contenido}</Text>
    </View>
  );
};

/*ZONA 2: MAIN*/
export default function App() {
  return (
    <View style={styles.container}>
      <Boton></Boton>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/*ZONA 3: ESTÉTICA DEL SCREEN*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
