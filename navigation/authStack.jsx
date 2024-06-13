import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/login'
import { SignUp } from '../screens/signUp'

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthStack = () => (
  <Navigator initialRouteName={'Login'} screenOptions={{ headerShadowVisible: false,
    headerTitle: 'ViajesLit'
  }}>
    <Screen name={'Login'} component={Login} />
    <Screen name={'SignUp'} component={SignUp}/>
  </Navigator>
)