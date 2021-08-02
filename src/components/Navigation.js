import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import TracksScreen from './Tracks';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserContext from '../context/UserContext';
import Token from './Token';
const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'orange',
  },
};
const Navigation = () => {
  const value = useContext(UserContext);
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tracks') {
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
            } else if (route.name === 'Albums') {
              iconName = focused ? 'albums' : 'albums-outline';
            } else if (route.name === 'Artists') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1DB954',
          inactiveTintColor: 'white',
        }}
      >
        <Tab.Screen name='Tracks' component={TracksScreen} style={{ backgroundColor: 'black' }} />
        <Tab.Screen name='Albums' component={TracksScreen} />
        <Tab.Screen name='Artists' component={TracksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
