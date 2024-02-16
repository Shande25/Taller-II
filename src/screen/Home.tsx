import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {Alert,Button, Image, ImageBackground,SafeAreaView, StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent';

interface Props extends StackScreenProps<any,any>{}

export const Home = ({navigation}:Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri: 'https://img.freepik.com/vector-gratis/antecedentes-medicos-limpios_53876-119280.jpg',
        }}>
        <View style={styles.container}>
          <Text style={styles.titleStile}>PHARMA SWIFT</Text>

          <View style={styles.centerContentStile}>
            <Image
              source={{
                uri: 'https://images.vexels.com/media/users/3/200066/isolated/preview/6778656beb270356664d5a58dc60f34e-scooter-de-entrega-de-pizza.png',
              }}
              style={styles.imageStile}
            />

            <View>
              <Text style={styles.title}>
                Quieres conocer mas acerca de nosotros
              </Text>
              <View style={styles.fixToText}>
                <ButtonComponent
                  title="Registrarse"
                  onPress={()=>navigation.navigate('Registrase')}
                />
                <ButtonComponent
                  title="Iniciar Sesion"
                  onPress={()=>navigation.navigate('InicioSeccion')}
                />
              </View>
            </View>

            <Text style={styles.final}>
              La salud viaja rápido, contigo y PharmaSwift
            </Text>
          </View>
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
  titleStile: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  centerContentStile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStile: {
    width: 400,
    height: 400,
    marginTop: 90,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 23,
    color: 'black',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  final: {
    textAlign: 'center',
    marginVertical: -25,
    fontSize: 18,
    color: 'black',
    padding: 30,
  },
});