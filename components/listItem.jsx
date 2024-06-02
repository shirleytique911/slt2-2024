import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../utils/price'

export const ListItem = ({id, brand, model, onDelete, price, image}) => (
    <View style={styles.cartItem}>
        <Image style={styles.image} source={{ uri: image}} 
                resizeMode="contain"/>
        <View style={styles.info}>
            <Text>{id}</Text>
            <Text>{brand}</Text>
            <Text>{model}</Text>
            <Text>{formatPrice(price)}</Text>
            <Pressable style={styles.delete} onPress={() => onDelete(id)}>
                <Text style={styles.deleteText}>Eliminar</Text>
            </Pressable>
        </View>
    </View>
)

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
    },
    image: {
        height: 96,
        width: 160,
    },
    info: {
        gap: 8,
        flex: 1,
    },
    delete: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: 'red',
        width: 96,
        alignItems: 'center',
    },
    deleteText: {
        color: 'white',
    }
})