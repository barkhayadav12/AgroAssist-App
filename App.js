import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import FeaturesScreen from './screens/FeaturesScreen';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Features') iconName = 'apps';
            else if (route.name === 'Chat') iconName = 'chatbubbles';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E8B57',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Features" component={FeaturesScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
