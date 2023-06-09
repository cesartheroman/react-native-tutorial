import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddColorPaletteModal from './screens/AddColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({
        title: route.params ? route.params.paletteName : '',
      })}
    />
  </MainStack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen
        name="main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="AddNewPalete" component={AddColorPaletteModal} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
