import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardMedica } from './Components/CardMedica';
import { ModalCar } from './Components/ModalCar';


//Data prueba
export interface Product{
    id: number;
    name: string;
    price: number;
    stock:number;
    pathImage: string;
}

const products: Product[]=[
    
    {id: 1, name: 'Ibuprofeno', price: 1.50, stock: 4, pathImage:'https://farmaenlace.vtexassets.com/arquivos/ids/165859-800-450?v=638083720113400000&width=800&height=450&aspect=true'},
    {id: 2, name: 'Paracetamol', price: 0.59, stock: 6, pathImage:'https://statics-cuidateplus.marca.com/cms/styles/ratio_1_1/azblob/2022-09/blister-paracetamol.jpg.webp?itok=iBdn6prc'},
    {id: 3, name: 'Amoxicilina', price: 7.63, stock: 12, pathImage:'https://laboratoriosbritania.com/wp-content/uploads/2020/03/Amoxicilina-500mg-caja-x-100.jpg'},
    {id: 4, name: 'Multivitaminico', price: 300.00, stock: 4, pathImage:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/968008e0-6be1-4229-a991-7e400dde01ae.5627118d7738f1297edcfe24c49790fd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff'},
    {id: 5, name: 'Epinefrina', price: 15.00, stock: 4, pathImage:'https://www.life.com.ec/wp-content/uploads/2022/02/EPINEFRINA_AMPOLLAS_1MG_SOLUCION_INYECTABLE_LIFE-1.png'},
    {id: 6, name: 'Cataflan', price: 15.00, stock: 4, pathImage:'https://www.drogariaminasbrasil.com.br/media/product/4b2/cataflam-aerosol-com-60g-0fc.jpg'},
    
]
export interface Car{
  id:number;
  name:string;
  price:number;
  quantity:number;
}

export const Medica = () => {
  //Hook que actualice el estado de los productos
  const [productsState, setProductsState] = useState(products);
  const [cars, setCars] = useState<Car[]>([])
  const [showModal, setshowModal] = useState(false);

  //Función para cambiar el stock
  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ?{...item,
        stock:item.stock-quantity}
      : item);
      setProductsState(updateStock)
  }
  const addProduct=(idProduct:number,quantity:number)=>{
    const product=productsState.find((item)=>item.id == idProduct)

    if(!product){
       return;
    }
    const newCar : Car={
      id:product.id,
      name:product.name,
      price:product.price,
      quantity:quantity
    }
    setCars(prevCars=>[...prevCars, newCar])
    console.log(cars);
  }
  
  return (
    <View>
      <View style={styles.header}>
        <TitleComponent title='Productos'/>
        <View style={styles.iconCar}>
          <Text style={styles.textIconCar}>{cars.length}</Text>
        {/* <Icon name={'shopping-cart'} size={20} color={'#fff'} onPress={()=>setshowModal(!showModal  )} /> */}
        <TouchableOpacity  onPress={()=>setshowModal(!showModal  )}>
                            <Text >X</Text>
                        </TouchableOpacity>
        </View>
        </View>
        <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({item})=><CardMedica product={item} handlerChangeStockProduct={handlerChangeStockProduct}/>}
                    keyExtractor={item => item.id.toString()}/>
        </BodyComponent>
        <ModalCar cars={cars} isVisible={showModal} changeVisible={()=>setshowModal(!showModal)}/>
    </View>
  )
}
const styles=StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center'
  },iconCar:{
    flex:1,
    alignItems:'flex-end',
    paddingHorizontal:33
  },textIconCar:{
    backgroundColor:'#fff',
    paddingHorizontal:5,
    borderRadius:20,
    fontWeight:'bold',
    fontSize:12
  }
})