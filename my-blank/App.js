/* ZONA 1: IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, {useState} from 'react';

const Interruptor = () => {
  const[isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View styles = {styles.container}>
      <Text>
        {isEnabled ? 'ACTIVADO': 'DESACTIVADO'}
      </Text>
      <Switch
        trakColor = {{false: '#767577', true: '#81b0ff'}}
        thumbColor = {isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}




/* ZONA2: MAIN */
export default function App() {
  return (
    <View style={styles.container}>
      < Interruptor />
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
