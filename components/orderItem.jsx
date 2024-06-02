import { StyleSheet, Text, View } from "react-native";
export const OrderItem = ({createdAt, totalPrice}) =>(
    <View style={styles.orderItem}>
        <Text style={styles.orderText}>{createdAt}</Text>
        <Text style={styles.orderText}>{totalPrice}</Text>
    </View>
)

const styles = StyleSheet.create({
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'gray'
    },
    orderText: {
        fontFamily: 'Unbounded'
    }
})