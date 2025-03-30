import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesScreen from '../screens/Fan/MoviesScreen';
import FavoritesScreen from '../screens/Fan/FavoritesScreen';

const Tab = createBottomTabNavigator();

const FanTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Películas" component={MoviesScreen} />
    <Tab.Screen name="Favoritos" component={FavoritesScreen} />
  </Tab.Navigator>
);

export default FanTabs;