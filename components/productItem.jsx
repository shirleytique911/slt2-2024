import { Image, View, Text, StyleSheet, Pressable } from "react-native"
import { theme } from "../configs/theme"
import { formatPrice } from "../utils/price"
import { List } from "../icons/list"

export const ProductItem = ({ title, author, description,pages, editorial, price, image,onPress, onSvgPress}) => {

    return (
        <Pressable style={styles.productItem} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image 
                source={{ uri: image}}
                style={styles.image} resizeMode='contain'
                />
                <Pressable onPress={onSvgPress}>
                    <List fill={'gray'} style={styles.svg} />
                </Pressable>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>Author: {author}</Text>
                <Text style={styles.text}>Editorial: {editorial}</Text>
                <Text style={styles.text}>Páginas: {pages}</Text>
                <Text style={styles.text}>Descripción: {description}</Text>  
                <Text style={styles.text}>{formatPrice(price)}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    productItem: {
        borderRadius: 16,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        height: 160,
        backgroundColor: theme.white[50],
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    svg: {
        position: 'absolute',
        right: 16,
        bottom: 130, 
    },
    info: {
        gap: 4,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    text: {
        fontSize: 14  
    }
})