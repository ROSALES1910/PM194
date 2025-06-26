/* Zona 1: Importaciones */
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Switch } from 'react-native';
import { Video } from 'expo-av';

SplashScreen.preventAutoHideAsync();

/* Zona 2: Main */
export default function App() {
  const [appReady, setAppready] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setAppready(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  const handleRegistro = () => {
    console.log('Botón presionado');

    if (nombre.trim() === '' || correo.trim() === '') {
      setTimeout(() => {
        Alert.alert('Error', 'Por favor completa todos los campos.');
      }, 100);
    } else if (!aceptaTerminos) {
      setTimeout(() => {
        Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      }, 100);
    } else {
      setTimeout(() => {
        Alert.alert('¡Registro exitoso!', `Nombre: ${nombre}\nCorreo: ${correo}`);
      }, 100);
    }
  };

  return (
    <View style={styles.container}>
      {/* El video al fondo */}
      <Video
        source={require('./assets/HOLIS.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted
      />

      {/* Contenido encima del video */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Registro de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <View style={styles.switchContainer}>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            thumbColor={aceptaTerminos ? "#007AFF" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, { opacity: aceptaTerminos ? 1 : 0.7 }]}
          onPress={handleRegistro}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  switchText: {
    color: '#fff',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
