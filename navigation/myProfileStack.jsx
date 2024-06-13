import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyProfile } from '../screens/myProfile'
import { ImageSelector } from '../screens/imageSelector'
import { ListAddress } from '../screens/listAddress'
import { LocationSelector } from '../screens/locationSelector'

const { Navigator, Screen } = createNativeStackNavigator()

export const MyProfileStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Unbounded' },
        headerShadowVisible: false,
      }}
    >
      <Screen
        name={'MyProfile'}
        component={MyProfile}
        options={{ headerTitle: 'Perfil', headerTitleAlign: 'center' }}
      />
      <Screen
        name={'ImageSelector'}
        component={ImageSelector}
        options={{ headerTitle: 'Seleccionar imagen' }}
      />
      <Screen
        name={'MyLocation'}
        component={ListAddress}
        options={{ headerTitle: 'Mi ubicación' }}
      />
      <Screen
        name={'LocationSelector'}
        component={LocationSelector}
        options={{ headerTitle: 'Seleccionar ubicación' }}
      />
    </Navigator>
  )
}