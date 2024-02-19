import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR } from '../commons/Color';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface Props extends StackScreenProps<any, any> {}

export const InicioSesion = ({navigation}: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const users: User[] = [
    { id: 1, username: 'VFlores', email: 'vflores@gmail.com', password: '123456' },
    { id: 2, username: 'Viviana', email: 'flores@gmail.com', password: '1234567' },
    { id: 3, username: 'Hernan', email: 'flores@gmail.com', password: '1234567' },
    { id: 4, username: 'Patrick', email: 'flores@gmail.com', password: '1234567' },
    { id: 5, username: 'Flores', email: 'vflores@gmail.com', password: '123456' },
  ];

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setRegistroExitoso(true);
      navigation.navigate('Medica');
    } else {
      setRegistroExitoso(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri: 'https://img.freepik.com/vector-gratis/antecedentes-medicos-limpios_53876-119280.jpg',
        }}>
        <View style={styles.container1}>
          <Image style={styles.logo} source={{uri: 'https://cdn-icons-png.flaticon.com/128/9133/9133681.png'}} />
          <Text style={styles.title}>Iniciar Sesión</Text>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            {registroExitoso ? (
              <Text style={styles.successMessage}>¡Inicio de sesión exitoso!</Text>
            ) : (
              <Text style={styles.errorMessage}>Credenciales incorrectas. Intente de nuevo.</Text>
            )}
          </View>

          <ButtonComponent title='Regresar' onPress={() => navigation.navigate('Home')} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#573F27',
  },
  formContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#573F27',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#573F27',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
