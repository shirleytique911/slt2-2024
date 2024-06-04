import { StyleSheet, Text, View } from 'react-native';

export const OrderItem = ({id, total, date }) => {
    return (
        <View style={styles.orderItem}>
            <Text>ID: {id}</Text>
            <Text>Total: {total}</Text>
            <Text>Fecha: {date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});