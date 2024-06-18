import { StyleSheet, Text, View } from 'react-native';
import { formatPrice } from '../utils/price';


export const OrderItem = ({id, total, date }) => {
    return (
        <View style={styles.orderItem}>
            <Text>ID: {id}</Text>
            <Text>Total: {formatPrice(total)}</Text>
            <Text>Fecha: {date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});