// Registro.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonComponent } from '../components/ButtonComponent';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface Props {
  navigation: any;
}

export const Registro = ({ navigation }: Props) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const handleRegistro = () => {
    if (password !== confirmPassword) {
      console.log('Las contraseñas no coinciden');
      return;
    }

    const newUser: User = {
      id: Math.random(),
      username: nombre,
      email,
      password
    };

    setUsers([...users, newUser]);
    setRegistroExitoso(true);
    navigation.navigate('InicioSesion');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: 'https://img.freepik.com/vector-gratis/antecedentes-medicos-limpios_53876-119280.jpg',
        }}>
        <View style={styles.container1}>
          <Text style={styles.title}>¡Registro!</Text>

          <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9133/9133681.png' }} />

          <Text style={styles.bienvenida}>Completa tus datos para registrarte</Text>

          <View style={styles.registro}>
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            {registroExitoso && (
              <Text style={styles.successMessage}>¡Registro exitoso!</Text>
            )}
          </View>

          <ButtonComponent title='Volver al inicio' onPress={() => navigation.navigate('Home')} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
  container1: {
    padding: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#573F27',
    marginBottom: 20,
  },
  registro: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#573F27',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#573F27',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#573F27',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    color: '#4CAF50',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  bienvenida: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#573F27',
    marginBottom: 20,
    textAlign: 'center',
  }
});
