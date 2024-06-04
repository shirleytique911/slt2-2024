import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CartItem } from '../components/cartitem'
import { formatPrice } from '../utils/price'
import { removeItem, removeAll } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'
import { Button } from "../components/button"
import { useNavigation } from '@react-navigation/native'
export const Cart = () => {
    const { navigate } = useNavigation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.cart.value.user)
    const items = useSelector(state => state.cart.value.items)
    const total = useSelector(state => state.cart.value.total)
    const [triggerPost, result] = usePostOrderMutation()

    const cartIsEmpty = items.length === 0

    const handleDelete = item => {
        dispatch(removeItem(item))
      }
    
      const confirmOrder = () => {
        const date = new Date().toISOString().split('T')[0];
        triggerPost({ items, total, user,date })
        dispatch(removeAll())
        navigate('OrdersTab')
      }

    return (
    <View style={styles.cart}>
        <FlatList 
            contentContainerStyle={{ gap: 32 }}
            data={items}
            renderItem={({item}) => <CartItem {...item} onDelete={() => handleDelete(item)}/>}
            ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
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

const styles = StyleSheet.create({
    cart: {
        minHeight: '100%',
        backgroundColor: 'white',
        padding: 16,
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    totalText: {
        fontSize: 18,
        fontFamily: 'Unbounded'
    }
})