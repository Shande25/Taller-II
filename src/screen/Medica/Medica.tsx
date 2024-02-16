import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardMedica } from './Components/CardMedica';


//Data prueba
export interface Product{
    id: number;
    name: string;
    price: number;
    stock:number;
    pathImage: string;
}

const products: Product[]=[
    {id: 1, name: 'Funda de arroz', price: 11.80, stock: 10, pathImage:'https://lh3.googleusercontent.com/proxy/hfU6tf5RU3tXpCwAgjDyyPKOS42VcrON5Y56Kmaw6Y7tv0-0ui8chQO39J_llAx1ClA41P4DrrY-hwb-HUwywgcAAsmeKIgLms57WqEI31C4EGn8GvuMR7IwVrQk4g'},
    {id: 2, name: 'Funda de azucar', price: 1.50, stock: 0, pathImage:'https://farmaenlace.vtexassets.com/arquivos/ids/165859-800-450?v=638083720113400000&width=800&height=450&aspect=true'},
    {id: 3, name: 'Funda de papas', price: 0.59, stock: 6, pathImage:'https://statics-cuidateplus.marca.com/cms/styles/ratio_1_1/azblob/2022-09/blister-paracetamol.jpg.webp?itok=iBdn6prc'},
    {id: 4, name: 'Funda de fideos', price: 7.63, stock: 12, pathImage:'https://laboratoriosbritania.com/wp-content/uploads/2020/03/Amoxicilina-500mg-caja-x-100.jpg'},
    {id: 5, name: 'Funda de sal', price: 300.00, stock: 4, pathImage:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/968008e0-6be1-4229-a991-7e400dde01ae.5627118d7738f1297edcfe24c49790fd.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff'},
    {id: 6, name: 'Funda de sal', price: 15.00, stock: 4, pathImage:'https://www.life.com.ec/wp-content/uploads/2022/02/EPINEFRINA_AMPOLLAS_1MG_SOLUCION_INYECTABLE_LIFE-1.png'},
    {id: 7, name: 'Funda de sal', price: 15.00, stock: 4, pathImage:'https://www.drogariaminasbrasil.com.br/media/product/4b2/cataflam-aerosol-com-60g-0fc.jpg'},
]

export const Medica = () => {
  //Hook que actualice el estado de los productos
  const [productsState, setProductsState] = useState(products);

  //Función para cambiar el stock
  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ?{...item,
        stock:item.stock-quantity}
      : item);
      setProductsState(updateStock)
  }

  return (
    <View>
        <TitleComponent title='Productos'/>
        <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({item})=><CardMedica product={item} handlerChangeStockProduct={handlerChangeStockProduct}/>}
                    keyExtractor={item => item.id.toString()}/>
        </BodyComponent>
    </View>
  )
}
