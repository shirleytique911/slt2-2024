import { StyleSheet, Text, Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import products from '../data/products.json'
import { useNavigation, useRoute } from "@react-navigation/native"
import { formatPrice } from "../utils/price"
import { Button } from "../components/button"
import { useDispatch } from "react-redux"
import { addItem } from '../features/cart/cartSlice'

export const ItemDetail = () => {
    const { params } = useRoute()
    const { goBack } = useNavigation()
    const dispatch = useDispatch()
    const item = products.find(product => product.id === params.productId);
    const { title, author, price, image, categorybook } = item;
    const handleAddToCart = () => {
        dispatch(addItem({ ...item }))
        goBack()
    }

    if (!item) {
        return (
            <SafeAreaView style={styles.itemDetail}>
                <Text>Producto no encontrado</Text>
            </SafeAreaView>
        );
    }
    
    return (
        <SafeAreaView style={styles.itemDetail}>
            <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.titleSection}>{title}</Text>
            <View style={styles.info}>
                <Text>{categorybook}</Text>
                <Text>{author}</Text>
                <Text>{formatPrice(price)}</Text>
                <Button onPress={handleAddToCart}>
                    Agregar al carrito
                </Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image:
    {
        width: '100%',
        height: 400,
        marginTop: 20,
    },
    itemDetail:
    {
        gap: 32,
        paddingTop: -50,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    info:
    {
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSection:
    {
        fontWeight: 'bold',
        fontFamily: 'Unbounded',
        textAlign: 'center'
    },
})