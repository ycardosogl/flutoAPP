import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';
import LoginCli from './src/pages/loginCli';
import LoginProp from './src/pages/loginProp';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="loginCli" component={LoginCli} />
        <Stack.Screen name="loginProp" component={LoginProp} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

