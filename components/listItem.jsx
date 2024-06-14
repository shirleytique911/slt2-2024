import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../utils/price'
import { Delete } from '../icons/delete'

export const ListItem = ({image, price, title, pages, editorial, onDelete}) => (
    <View style={styles.listItem}>
        <Image style={styles.image} source={{ uri: image}} 
                resizeMode="contain"/>
        <View style={styles.info}>
            <Text>{formatPrice(price)}</Text>
            <Text>{title}</Text>
            <Text>páginas: {pages}</Text>
            <Text>{editorial}</Text>
            <Pressable style={styles.delete} onPress={onDelete}>
                <Text style={styles.deleteText}><Delete /></Text>
            </Pressable>
        </View>
    </View>
)

const styles = StyleSheet.create({
    listItem: {
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
        backgroundColor: 'gray',
        width: 96,
        alignItems: 'center',
    },
    deleteText: {
        color: 'white',
    }
})