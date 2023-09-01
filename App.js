import React from 'react';
import { useFonts } from 'expo-font';
import Drawer from './routes/drawer';

export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-light': require('./assets/fonts/Nunito-Light.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Drawer />
  );
}