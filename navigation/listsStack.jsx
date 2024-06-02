import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Lists } from "../screens/lists"

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator()
export const ListsStack = () =>{
    return (
        <StackNavigator screenOptions={{
            headerTitleStyle: { fontFamily: 'Unbounded'}}}>
            <StackScreen name='Lists' component={Lists}
                options={{
                    headerTitle: 'Lista de Deseos',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
        </StackNavigator>
    )
}