import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';
import LoginCli from './src/pages/loginCli';
import LoginProp from './src/pages/loginProp';
import CadastroCli from './src/pages/cadastroCli';
import Inicial from './src/pages/inicial';
import Reserva from './src/pages/reserva';
import Cancelado from './src/pages/cancelado';
import Confirmado from './src/pages/confirmado';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="loginCli" component={LoginCli} />
        <Stack.Screen name="loginProp" component={LoginProp} />
        <Stack.Screen name="cadastroCli" component={CadastroCli} />
        <Stack.Screen name="inicial" component={Inicial} />
        <Stack.Screen name="reserva" component={Reserva} />
        <Stack.Screen name="cancelado" component={Cancelado} />
        <Stack.Screen name="confirmado" component={Confirmado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

