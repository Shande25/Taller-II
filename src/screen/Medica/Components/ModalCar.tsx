import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Car} from '../Medica';
import {BODY_COLOR, ERROR_COLOR, PRIMARY_COLOR} from '../../../commons/Color';

interface Props {
  cars: Car[];
  isVisible: boolean;
  changeVisible: () => void;
}
export const ModalCar = ({cars, isVisible, changeVisible}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.root}>
        <View style={{width: width * 0.8, ...styles.content}}>
          <View style={styles.header}>
            <Text style={styles.title}>Mis productos</Text>
            <TouchableOpacity style={styles.iconClose} onPress={changeVisible}>
              <Text style={styles.iconText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoTable}>
            <Text style={styles.textHeaderTable}>Producto</Text>
            <View style={styles.descriptionTable}>
            <Text style={styles.descriptionText}>Pre.</Text>
            <Text style={styles.textHeaderTable}>Cant.</Text>
            <Text style={styles.descriptionText}>Total</Text>
            </View>
          </View>
          <FlatList
            data={cars}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
            <View>
                <Text>{item.name}</Text>
                <View style={styles.descriptionTable}></View>
                <Text>{item.price.toFixed(2)}</Text>
                <Text>{item.quantity}</Text>
                <Text>{(item.price*item.quantity).toFixed(2)}</Text>
            </View>}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    padding: 20,
    backgroundColor: BODY_COLOR,
    borderRadius: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },
  iconClose: {
    backgroundColor: ERROR_COLOR,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: BODY_COLOR,
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonQuantity: {
    backgroundColor: PRIMARY_COLOR,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonQuantityText: {
    color: BODY_COLOR,
    fontWeight: 'bold',
    fontSize: 18,
  },
  textQuantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerTotalPrice: {
    alignItems: 'center',
    marginBottom: 10,
  },
  textTotalPrice: {
    fontSize: 18,
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
  },
  buttonCar: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonCarText: {
    color: BODY_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textStock: {
    fontSize: 18,
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },infoTable:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  descriptionTable:{
    flexDirection:'row'
  },
  descriptionText:{
    marginHorizontal:10,
    fontWeight: 'bold',
    color: '#000'
  },
  textHeaderTable:{
    fontWeight: 'bold',
    color: '#000'
  }
});