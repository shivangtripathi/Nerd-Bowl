import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen,LoginScreen,RegisterScreen,SplashScreen} from './source/screens/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
      <Tab.Screen name="AddPost" component={HomeScreen} />
      <Tab.Screen name="Notification" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen name="Home" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;