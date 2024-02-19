import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/Home';
import {  InicioSesion } from '../screen/IniciarSeccion';
import { Registro } from '../screen/Registro';
import { Medica } from '../screen/Medica/Medica';
import { PRIMARY_COLOR } from '../commons/Color';



const Stack = createStackNavigator();

export const StackNavigation =()=> {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle:{
          backgroundColor:PRIMARY_COLOR
      }
  }}
      >
      
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Stack.Screen name="InicioSeccion"options={{headerShown:false}} component={InicioSesion} />
      <Stack.Screen name="Registrase"options={{headerShown:false}} component={Registro} />
      <Stack.Screen name="Medica" options={{headerShown:false}} component={Medica} />
      
    </Stack.Navigator>
  );
}