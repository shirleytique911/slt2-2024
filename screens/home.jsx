import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { Categories } from '../components/categories';

export const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <Categories />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home:
  {
    flex: 1,
    padding: 16,
    gap: 32,
    paddingTop: -30,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});