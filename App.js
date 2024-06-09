import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
//import { Navigator } from './navigation/tabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainNavigator } from './navigation/mainNavigator'

export default function App() {
  const [screen, setScreen] = useState({ path: 'welcome', params: null})
  const [fontsLoaded, fontError] = useFonts({
    'Unbounded': require('./assets/fonts/Unbounded.ttf'),
  })

  const navigate = screen => setScreen(screen)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='white' style='dark' />
        <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}


