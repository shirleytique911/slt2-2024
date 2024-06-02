import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Orders } from "../screens/orders"

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()
export const OrdersStack = () =>{
    return (
        <StackNavigator screenOptions={{
            headerTitleStyle: { fontFamily: 'Unbounded'}}}>
            <StackScreen name='Orders' component={Orders}
                options={{
                    headerTitle: 'Ordenes',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
        </StackNavigator>
    )
}