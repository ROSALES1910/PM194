/* ZONA 1:  IMPORTACIONES*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const {contenido} = props;
  // const { } = props; // Si necesitas destructurar props
  return (
    <Text> {contenido} </Text>
  );
};

/*ZONA 2: MAIN*/
export default function App() {
  return (
    <View style={styles.container}>
      <Button title = "TLABAJA!!"></Button>
      <Texto contenido = "HOLA"></Texto>
      <Texto contenido = "MUNDO"></Texto>
      <Texto contenido = "REACT NATIVE"></Texto>
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
