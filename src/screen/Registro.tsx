import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface Props extends StackScreenProps<any,any>{}
export const Registro = ({navigation}:Props)=> {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleRegistro = () => {
    setRegistroExitoso(true);
  };

  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>¡Registro!</Text>

      <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/128/9133/9133681.png'}} />

      <Text style={styles.bienvenida}>¡Únete a nosotros!{'\n'}Completa tus datos para registrarte.</Text>

      <View style={styles.registro}>
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese Su Usuario"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese Su Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.entrada}
          placeholder="Ingrese Su Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.entrada}
          placeholder="Confirme Su Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        {registroExitoso && (
          <Text style={styles.mensaje}>¡Registro exitoso!</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#15171e',
  },
  title: {
    fontSize: 50,
    color: 'white',
  },
  registro: {
    justifyContent: 'center',
    borderColor: 'aqua',
    padding: 20,
    top: '3%',
  },
  entrada: {
    height: 40,
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  mensaje: {
    color: 'white',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    top: '2%',
  },
  bienvenida: {
    fontSize: 20,
    fontWeight: 'bold',
    top: '4%',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    marginHorizontal: 20,
  }
});