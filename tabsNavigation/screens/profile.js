import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import Detalle from './detalle';

const Stack = createNativeStackNavigator();

function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil usuario</Text>
      <Button
        title="Detalles de Usuario"
        onPress={() => navigation.navigate('Detalle')}
      />
    </View>
  );
}

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontSize: 22, fontWeight: 'bold', color: 'green', marginBottom: 10
  }
});