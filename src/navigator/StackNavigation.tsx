import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/Home';
import { InicioSeccion } from '../screen/IniciarSeccion';
import { Medica } from '../screen/Meidica';
import { Registro } from '../screen/Registro';



const Stack = createStackNavigator();

export const StackNavigation =()=> {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      
      <Stack.Screen name="Home" options ={{title:'Mi Movil'}} component={Home} />
      <Stack.Screen name="InicioSeccion" options ={{title:'Mi Movil'}} component={InicioSeccion} />
      <Stack.Screen name="Registrase" options ={{title:'Mi Movil'}} component={Registro} />
      <Stack.Screen name="Medica" options ={{title:'Mi Movil'}} component={Medica} />
      
    </Stack.Navigator>
  );
}