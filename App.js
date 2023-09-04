import { useCallback } from 'react';
import Home from './screens/home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; //import SplashScreen so that when the fonts are not loaded, we can continue to show SplashScreen.
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync(); //This prevents SplashScreen from auto hiding while the fonts are loaded.

export default function App() {

  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  
  // After the custom fonts have loaded, we can hide the splash screen and display the app screen.
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View  onLayout={onLayoutRootView}>
      <Home />
    </View>
  );
}
