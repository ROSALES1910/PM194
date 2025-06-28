/* Zona 1: Importaciones */
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

SplashScreen.preventAutoHideAsync();

/* Zona 2: Main */
export default function App() {
  return (
    <ScrollView contentContainerStyle = {styles.backgrouns} showsVerticalScrollIndicator={false} horizontal={true}>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
      <Text>HOLA MUNDO</Text>
    </ScrollView>
  )
}

/* Estilos */
const styles = StyleSheet.create({
  backgrouns: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});