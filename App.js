import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RapidinAppScreen from './components/PersonasCercanas/Listar';
import ProfileScreen from './components/Perfil/Mostrar';
import PerfilFeedback from './components/Perfil/Feedback';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RapidinApp" component={RapidinAppScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={({ route }) => ({ title: route.params.persona.nombre })} />
        <Stack.Screen name="PerfilFeedback" component={PerfilFeedback} options={({ route }) => ({ title: "Valoraciones" })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
