import { Pressable, Text, StyleSheet } from 'react-native';
import { theme } from '../configs/theme';

export const Button = ({ children, onPress }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primary[500],
    borderRadius: 12,
    padding: 16,
  },
  buttonText: {
    color: theme.white[50],
    fontSize: 16,
    fontWeight: 'bold',
  },
});
