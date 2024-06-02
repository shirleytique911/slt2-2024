import { 
    Pressable,
    Text,
    StyleSheet,
    View,
  } from 'react-native';
import { theme } from '../configs/theme';
export const Button = ({ children, onPress }) => (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#2C3E50',
      borderRadius: 12,
      padding: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });