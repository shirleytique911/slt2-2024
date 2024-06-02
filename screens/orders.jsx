import { FlatList, Text, View } from "react-native";
import orderData from '../data/orders.json'
import { OrderItem } from "../components/orderItem";
export const Orders = () => (
    <View>
        <FlatList 
            data={orderData}
            renderItem={({item}) => <OrderItem {...item}/>}
            ListEmptyComponent={<Text>No orders</Text>}
        />
    </View>
)