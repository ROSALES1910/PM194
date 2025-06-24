/* Zona 1: Importaciones */
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

SplashScreen.preventAutoHideAsync();

/* Zona 2: Main */
export default function App() {
  const [appReady, setAppready] = useState(false);

  useEffect(() => {
    setTimeout(async() => {
      setAppready(true);
        await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source = {require('./assets/descarga.jpg')}
      style={styles.background}
      resizeMode = "cover">
      <View style={styles.container}>
        <Text style={styles.title}>BIENVENIDO A MI APLICACIÓN</Text>
        <Text style={styles.subtitle}>
          {appReady ? 'CARGA COMPLETA' : 'CARGANDO...'}
        </Text>
      </View>
    </ImageBackground>
  );
}

/* Estilos */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  }
});