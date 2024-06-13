import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export const MyProfile = () => {
  const { navigate } = useNavigation()
  const { email, photo } = useSelector(state => state.auth.value.user)

  const goToImageSelector = () => navigate('ImageSelector')

  const goToMyLocation = () => navigate('MyLocation')

  return (
    <View style={styles.myProfile}>
      <Image
        source={
          photo ? { uri: photo } : require('../assets/myProfile/profile_placeholder.png')
        }
        resizeMode='cover'
        style={styles.image}
      />
      <Button onPress={goToImageSelector}>Agregar foto de perfil</Button>
      <Button onPress={goToMyLocation}>Mi dirección</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  myProfile: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    gap: 32,
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 50,
  },
})