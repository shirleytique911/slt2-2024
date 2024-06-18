import { StyleSheet, ScrollView, Platform, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Categories } from '../components/categories';
import { BREAKPOINTS } from '../utils/breakpoint';

export const Home = () => {
  const { width } = useWindowDimensions()
  const styles = createStyles(width)
  const Content = (
      <Categories />
  );

  return Platform.OS === 'web' ? (
    <ScrollView contentContainerStyle={styles.home}>
      {Content}
    </ScrollView>
  ) : (
    <SafeAreaView style={styles.home}>
      {Content}
    </SafeAreaView>
  );
};

const createStyles = deviceWidth => StyleSheet.create({
  home: {
    flex: 1,
    padding: 16,
    gap: 32,
    paddingTop: -30,
    paddingHorizontal: deviceWidth >= BREAKPOINTS.MEDIUM ? '30%' : 16,
    paddingBottom: 40,
  },
});
