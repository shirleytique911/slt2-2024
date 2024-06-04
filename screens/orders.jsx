import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from 'react-redux';
import { useGetOrdersByUserQuery } from '../services/shopService';
import { OrderItem } from "../components/orderItem";

export const Orders = () => {
    const user = useSelector(state => state.cart.value.user);
    const { data: orders, error, isLoading } = useGetOrdersByUserQuery(user);
    
    if (isLoading) return (
        <View style={styles.itemListOrders}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Cargando ordenes...</Text>
        </View>
      )

    return (
        <View>
            <FlatList 
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderItem {...item} />}
                ListEmptyComponent={<Text>No hay ordenes creadas</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemListOrders: {
      gap: 32,
      flex: 1,
      paddingTop: -40,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
  })
  