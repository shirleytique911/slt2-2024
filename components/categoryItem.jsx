import { Pressable, StyleSheet, Text } from 'react-native';

export const CategoryItem = ({ name, onPress }) => (
  <Pressable
    style={({ pressed }) => [
      styles.category,
      {
        backgroundColor: pressed ? '#1B2E3A' : '#2C3E50', 
      },
    ]}
    onPress={onPress}
    android_ripple={{ color: '#fff', borderless: false }} 
  >
    <Text style={styles.name}>{name}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  category: {
    width: '100%',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});