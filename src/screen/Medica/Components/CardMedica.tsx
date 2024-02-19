import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../Medica';
import { ModalMedica } from './ModalMedica';

interface Props {
    product: Product;
    handlerChangeStockProduct: (idProducto: number, quantity: number) => void;
}

export const CardMedica = ({ product, handlerChangeStockProduct }: Props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <View style={styles.card}>
                    <Image source={{ uri: product.pathImage }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text style={styles.price}>Precio: ${product.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <ModalMedica product={product} isVisible={showModal} changeVisible={() => setShowModal(!showModal)} handlerChangeStockProduct={handlerChangeStockProduct} />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 15,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',
    },
    price: {
        fontSize: 14,
        color: '#757575',
    },
});
