import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

interface Props extends StackScreenProps<any,any>{}

export const Medica = ({navigation}:Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
         <TouchableOpacity style={styles.buttonRegr} onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.buttonText1}>Atras</Text>
        </TouchableOpacity>
      <Text style={styles.title}>Medicamentos</Text>
      <Text style={styles.text}>Descubre nuestra variedad de medicamentos para cuidar tu bienestar. ¡Tu salud, nuestra prioridad!</Text>
        <View style={styles.imgCon}>
          <Image source={{ uri: 'https://statics-cuidateplus.marca.com/cms/styles/ratio_1_1/azblob/2022-09/blister-paracetamol.jpg.webp?itok=iBdn6prc' }} style={styles.image} />
          <Text style={styles.nombreM}>Paracetamol{'\n'}Analgésico y antipirético comúnmente utilizado para aliviar el dolor y reducir la fiebre</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver más</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgCon}>
          <Image source={{ uri: 'https://lh3.googleusercontent.com/proxy/KwU_sfog01MSZzgDFKpvbC-wxf5lWuHb0DSpVm7Z9qOJToKd5oJ1XqIYQupw-wK-0TamnxxwkFYUrree1PUGtBJpdAcmNcd_40kgHXsXkig9k6PspRpkAsRqLWyzJyg' }} style={styles.image} />
          <Text style={styles.nombreM}>Loratadina{'\n'}Antihistamínico de segunda generación utilizado para aliviar los síntomas de alergias.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver más</Text>
          </TouchableOpacity>
         
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6C22A6',
  },
  title: {
    fontSize: 50,
    marginBottom: 16,
    fontWeight: 'bold',
    color: 'white',
    top: '2%',
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
    color: 'white',  
    textAlign: 'center',
    top: '2%',
  },
  imgCon: {
    marginBottom: 24,
    alignItems: 'center',
    top: '4%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nombreM: {
    marginTop: 8,
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#030637',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
  },
  buttonRegr: {
    color: 'black',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    height: 40,
    width: 59,
    marginVertical: '-3%',
    marginRight:350

    
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
  },
});