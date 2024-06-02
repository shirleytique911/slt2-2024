import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Cart } from "../screens/cart"

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()
export const CartStack = () =>{
    return (
        <StackNavigator screenOptions={{
            headerTitleStyle: { fontFamily: 'Unbounded'}}}>
            <StackScreen name='Cart' component={Cart}
                options={{
                    headerTitle: 'Carrito',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
        </StackNavigator>
    )
}