import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import 'react-native-gesture-handler';
import { Home } from './src/screen/Home';
import { InicioSeccion } from './src/screen/IniciarSeccion';
import { Alert } from 'react-native';
import { StackNavigation } from './src/navigator/StackNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/> 
    </NavigationContainer>
  )
}

export default App;