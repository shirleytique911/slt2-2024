import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStack } from "./shopStack";
import { CartStack } from "./cartStack";
import { Cart } from "../icons/cart";
import { Shop } from "../icons/shop";
import { Person } from "../icons/person";
import { OrdersStack } from "./ordersStack";
import { Order } from "../icons/order";
import { ListsStack } from "./listsStack";
import { List } from "../icons/list";
import { MyProfileStack } from "./myProfileStack";

const { Screen, Navigator } = createBottomTabNavigator()

export const TabNavigator = () => (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Screen
        name='ShopTab'
        component={ShopStack}
        options={{
          title: 'Tienda',
          tabBarIcon: ({ color }) => <Shop fill={color} />,
        }}
      />
      <Screen 
        name="ListsTab" 
        component={ListsStack}
        options={{
            title: 'Lista',
            tabBarIcon:({color}) => <List fill={color} />,
        }}
      />
      <Screen
        name='CartTab'
        component={CartStack}
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color }) => <Cart fill={color} />,
        }}
      />
      <Screen
        name='OrdersTab'
        component={OrdersStack}
        options={{
          title: 'Ordenes',
          tabBarIcon: ({ color }) => <Order fill={color} />,
        }}
      />
      <Screen
        name='ProfileTab'
        component={MyProfileStack}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Person fill={color} />,
      }}
      />
    </Navigator>
)

