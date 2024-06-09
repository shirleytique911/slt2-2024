import { StyleSheet, Text, View } from 'react-native'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { useLoginMutation } from '../services/authService'
import { useState } from 'react'
import { loginSchema } from '../validations/loginSchema'
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

export const Login = () => {
  const { navigate } = useNavigation()
  const dispatch = useDispatch();
  const [triggerLogin, result] = useLoginMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async () => {
    try {
        loginSchema.validate({ 
          email, password 
        });

        const result = await triggerLogin({ email, password }).unwrap();
        //si se desea acceder directamente al valor devuelto por la promesa 
        //(es decir, el resultado de la operación asincrónica) después de que el Thunk 
        //se haya ejecutado, se puede utilizar .unwrap().
        if (result) {
           dispatch(setUser({ data: result }));
        }
      } catch (error) {
        console.error('Login error:', error);
      }
  }

  const goToSignUp = () => navigate('SignUp')

  return (
    <View style={styles.login}>
      <View style={styles.section}>
        <Text style={styles.title}>Bienvenido a ViajesLit</Text>
        <Input 
            label='Correo electronico' 
            placeholder='correo@viajeslit.com'
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
        <Button onPress={handleLogin}>Ingresar</Button>
      </View>
      <View style={styles.section}>
        <Text>Aun no tienes cuenta?</Text>
        <Button onPress={goToSignUp}>Registrate</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    minHeight: '100%',
    width: '100%',
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