import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home'
import About from '../screens/about'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainApp({title}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header title="GameZone"/>,
          drawerIcon: () => <MaterialIcons size={28} color="#aaa" name="home" />,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <Image
              source={require('../assets/images/game_bg.png')} // Ganti dengan path dan nama gambar Anda
              style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
            />
          )
        }}
      />

      <Drawer.Screen name="About" component={About} options={{
        headerTitle: () => <Header title="About GameZone" />, drawerIcon: () => <AntDesign size={25} color='#aaa' name='questioncircle' />, headerTitleAlign: 'center',
        headerBackground: () => (
            <Image
              source={require('../assets/images/game_bg.png')} // Ganti dengan path dan nama gambar Anda
              style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
            />
          )
      }} />
    </Drawer.Navigator>
  )
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainApp'>
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} e />
        <Stack.Screen name="MainApp" component={MainApp} options={{
          headerShown: false, headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;