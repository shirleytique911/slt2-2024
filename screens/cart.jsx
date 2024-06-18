import { FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { CartItem } from '../components/cartitem'
import { formatPrice } from '../utils/price'
import { removeItem, removeAll } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useGetOrdersByUserQuery, usePostOrderMutation } from '../services/shopService'
import { Button } from "../components/button"
import { useNavigation } from '@react-navigation/native'
import { BREAKPOINTS } from '../utils/breakpoint'
export const Cart = () => {
    const { navigate } = useNavigation()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.value.user)
    const user = userData.email
    const items = useSelector(state => state.cart.value.items)
    const total = useSelector(state => state.cart.value.total)
    const { data: orders, refetch } = useGetOrdersByUserQuery(user);
    const [triggerPost, result] = usePostOrderMutation()
    const { width } = useWindowDimensions()
    const styles = createStyles(width)

    const cartIsEmpty = items.length === 0

    const handleDelete = item => {
      dispatch(removeItem(item))
    }
    
    const confirmOrder = () => {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      
      const today = new Date();
      const todayFormat =today.toLocaleDateString('es-CL', options)
      triggerPost({ items, total, user,date: todayFormat })
      dispatch(removeAll())
      refetch()
      navigate('OrdersTab')
    }

    return (
    <View style={styles.cart}>
        <FlatList 
            contentContainerStyle={{ gap: 32 }}
            data={items}
            renderItem={({item}) => <CartItem {...item} onDelete={() => handleDelete(item)}/>}
            ListEmptyComponent={<Text style={styles.emptyText}>No hay productos en el carrito</Text>}
        />
        <View style={styles.total}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>{formatPrice(total)}</Text>
        </View>  
        {cartIsEmpty ? null : (
        <Button disabled={cartIsEmpty} onPress={confirmOrder}>
          Confirmar pedido
        </Button>
      )}      
    </View>
    )
}

const createStyles = deviceWidth => StyleSheet.create({
    cart: {
        minHeight: '100%',
        padding: 16,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: deviceWidth >= BREAKPOINTS.MEDIUM ? '30%' : 16,
    },
    totalText: {
        fontSize: 18,
        fontFamily: 'Unbounded'
    },
    emptyText:{
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: deviceWidth >= BREAKPOINTS.MEDIUM ? 18 : 16,
  },
})