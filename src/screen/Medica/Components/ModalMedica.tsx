import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Product } from '../Medica';
import { PRIMARY_COLOR, BODY_COLOR, ERROR_COLOR } from '../../../commons/Color';

interface Props {
    product: Product;
    isVisible: boolean;
    changeVisible: () => void;
    handlerChangeStockProduct: (idProducto: number, quantity: number) => void;
}

export const ModalMedica = ({ product, isVisible, changeVisible, handlerChangeStockProduct }: Props) => {
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState(1);

    const handlerChangeQuantity = (value: number) => {
        setQuantity(quantity + value);
    }

    const handlerAddProduct = () => {
        handlerChangeStockProduct(product.id, quantity);
        setQuantity(1)
        changeVisible();
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.root}>
                <View style={{ width: width * 0.9, ...styles.content }}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{product.name}</Text>
                        <TouchableOpacity style={styles.iconClose} onPress={changeVisible}>
                            <Text style={styles.iconText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: product.pathImage }}
                            style={styles.image} />
                    </View>
                    {
                        (product.stock === 0)
                            ? <Text style={styles.textStock}>Producto agotado!</Text>
                            :
                            <View>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => handlerChangeQuantity(-1)}
                                        disabled={quantity === 1}>
                                        <Text style={styles.buttonQuantityText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textQuantity}>{quantity}</Text>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => handlerChangeQuantity(1)}
                                        disabled={quantity === product.stock}>
                                        <Text style={styles.buttonQuantityText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.containerTotalPrice}>
                                    <Text style={styles.textTotalPrice}>Total: ${(product.price * quantity).toFixed(2)}</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonCar} onPress={handlerAddProduct}>
                                    <Text style={styles.buttonCarText}>Agregar al Carrito</Text>
                                </TouchableOpacity>
                            </View>
                    }
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
    },
});