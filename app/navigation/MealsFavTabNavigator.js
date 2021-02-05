import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MealsNavigator from './MealsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import routes from './routes';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.accentColor,
      }}>
      <Tab.Screen
        name={routes.Meals}
        component={MealsNavigator}
        options={({route}) => ({
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons color={color} size={24} name="food" />
          ),
        })}
      />
      <Tab.Screen
        name={routes.Favorites}
        component={FavoritesScreen}
        options={({route}) => ({
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons color={color} size={24} name="heart" />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MealsFavTabNavigator;
