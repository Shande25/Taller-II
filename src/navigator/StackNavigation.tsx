import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/Home';
import { InicioSeccion } from '../screen/IniciarSeccion';
import { Registro } from '../screen/Registro';
import { Medica } from '../screen/Medica/Medica';



const Stack = createStackNavigator();

export const StackNavigation =()=> {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="InicioSeccion" component={InicioSeccion} />
      <Stack.Screen name="Registrase" component={Registro} />
      <Stack.Screen name="Medica"  component={Medica} />
      
    </Stack.Navigator>
  );
}