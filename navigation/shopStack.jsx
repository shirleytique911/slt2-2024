import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from '../screens/home';
import { Welcome } from '../screens/welcome';
import { ItemListCategories } from '../screens/itemListCategories';
import { ItemDetail } from '../screens/itemDetail';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()
export const ShopStack = () => (

        <StackNavigator screenOptions={{
            headerTitleStyle: { fontFamily: 'Unbounded'}}}
        >
            <StackScreen name='Welcome' component={Welcome} options={{
                    headerShown: false,
                }}/>
            <StackScreen name='Home' component={Home} 
                options={{
                    headerTitle: 'Tienda',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <StackScreen 
                name='ItemListCategories' 
                component={ItemListCategories} 
                options={{
                    headerShadowVisible: false,
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />
            <StackScreen 
                name='ItemDetail' 
                component={ItemDetail} 
                options={{
                    headerShadowVisible: false,
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: 'Detalle Libro'
                }}
            />
        </StackNavigator>
        )