import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/navigators/AppRouter';

const loadFonts = async () => {
  await Font.loadAsync({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-BoldItalic': require('./assets/fonts/Inter-BoldItalic.ttf'),
    'Inter-Italic': require('./assets/fonts/Inter-Italic.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-MediumItalic': require('./assets/fonts/Inter-MediumItalic.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-SemiBoldItalic': require('./assets/fonts/Inter-SemiBoldItalic.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
