import { ActivityIndicator, FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSelector } from 'react-redux';
import { useGetOrdersByUserQuery } from '../services/shopService';
import { OrderItem } from "../components/orderItem";
import { BREAKPOINTS } from "../utils/breakpoint";

export const Orders = () => {
    const userData = useSelector(state => state.auth.value.user)
    const user = userData.email
    const { data: orders, error, isLoading } = useGetOrdersByUserQuery(user);
    const { width } = useWindowDimensions()
    const styles = createStyles(width)
    
    if (isLoading) return (
        <View style={styles.itemListOrders}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Cargando ordenes...</Text>
        </View>
      )

    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderItem {...item} />}
                ListEmptyComponent={<Text>No hay ordenes creadas</Text>}
            />
        </View>
    );
};

const createStyles = deviceWidth =>StyleSheet.create({
    container: {
      paddingHorizontal: deviceWidth >= BREAKPOINTS.MEDIUM ? '30%' : 16,
    },
    itemListOrders: {
      gap: 32,
      flex: 1,
      paddingTop: -40,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
  })
  