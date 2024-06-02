import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStack } from "./shopStack";
import { CartStack } from "./cartStack";
import { Cart } from "../icons/cart";
import { Shop } from "../icons/shop";
import { OrdersStack } from "./ordersStack";
import { Order } from "../icons/order";
import { ListsStack } from "./listsStack";
import { List } from "../icons/list";

const {Screen: TabScreen, Navigator: TabNavigator} = createBottomTabNavigator()
export const Navigator = () => (
    <NavigationContainer>
        <TabNavigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black'
        }}>
            <TabScreen 
                name="ShopTab" 
                component={ShopStack}
                options={{
                    title: 'Tienda',
                    tabBarIcon:({color}) => <Shop fill={color} />,
                }}
            />
            <TabScreen 
                name="ListsTab" 
                component={ListsStack}
                options={{
                    title: 'Lista',
                    tabBarIcon:({color}) => <List fill={color} />,
                }}
            />
            <TabScreen 
                name="CartTab" 
                component={CartStack}
                options={{
                    title: 'Carrito',
                    tabBarIcon:({color}) => <Cart fill={color} />,
                }}
            />
            <TabScreen 
                name="OrdersTab" 
                component={OrdersStack}
                options={{
                    title: 'Ordenes',
                    tabBarIcon:({color}) => <Order fill={color} />,
                }}
            />
        </TabNavigator>
    </NavigationContainer>
)