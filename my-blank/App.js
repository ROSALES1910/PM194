/* Zona 1: Importaciones */
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
}

/* Estilos */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: '#333',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  input: {
    height: 44,
    borderColor: '#bbb',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 15,
  },
});