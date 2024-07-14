import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { useLoginMutation } from '../services/authService'
import { useState } from 'react'
import { loginSchema } from '../validations/loginSchema'
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { insertSession } from '../db'
import { useEffect } from 'react'
import { BREAKPOINTS } from '../utils/breakpoint'

export const Login = () => {
  const { navigate } = useNavigation()
  const dispatch = useDispatch();
  const [triggerLogin, result] = useLoginMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { width } = useWindowDimensions()
  const styles = createStyles(width)
  
  const handleLogin = async () => {
    try {
      setIsLoading(true)
      loginSchema.validate({
        email,
        password
      })
      await triggerLogin({ email, password })
    } catch (error) {
      console.error('Error en la solicitud de ingreso:', error)
      Alert.alert('Error', 'Correo o contraseña incorrectos')
    } finally {
      setIsLoading(false)
    }
  }

  const goToSignUp = () => navigate('SignUp')

  useEffect(() => {
    if (result.data) {
      const { email, localId, idToken: token } = result.data
      dispatch(setUser({ email, localId, token }))
      insertSession({ email, localId, token })
    }
  }, [result.data])

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.section}>
          <Text style={styles.title}>Bienvenido a SportZone7</Text>
          <Input 
              label='Correo electronico' 
              placeholder='shirley@SportZone7.com'
              onChangeText={setEmail}
              value={email} 
          />
          <Input 
              label='Contraseña' 
              placeholder='******' 
              secureTextEntry
              onChangeText={setPassword}
              value={password}
          />
          <Button onPress={handleLogin}>
            {isLoading ? 'Ingresando...' : 'Ingresar'}
          </Button>
        </View>
        <View style={styles.section}>
          <Text>Aun no tienes cuenta?</Text>
          <Button onPress={goToSignUp}>Registrate</Button>
        </View>
      </View>
    </View>
  )
}

const createStyles = deviceWidth => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  login: {
    minHeight: '100%',
    width: deviceWidth <= BREAKPOINTS.MEDIUM ? '100%' : '30%',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  section: {
    width: '100%',
    gap: 16,
  },
  title: {
    fontFamily: 'Unbounded',
    fontSize: 24,
  },
})