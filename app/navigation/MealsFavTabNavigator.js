import React from 'react';
import {Platform, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MealsNavigator from './MealsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import routes from './routes';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavNavigator from './FavNavigator';

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const tabProps = Platform.select({
  android: {
    activeColor: colors.white,
    shifting: true,
  },
  ios: {
    tabBarOptions: {
      activeTintColor: colors.accentColor,
    },
  },
});

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      // activeColor={colors.accentColor}
      // shifting={true}
      {...tabProps}
      // tabBarOptions={{
      //   activeTintColor: colors.accentColor,
      // }}
    >
      <Tab.Screen
        name={routes.Meals}
        component={MealsNavigator}
        options={({route}) => ({
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons color={color} size={24} name="food" />
          ),
          tabBarColor: colors.accentColor,
        })}
      />
      <Tab.Screen
        name={routes.Favorites}
        component={FavNavigator}
        options={({route}) => ({
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons color={color} size={24} name="heart" />
          ),
          tabBarColor: colors.primaryColor,
        })}
      />
    </Tab.Navigator>
  );
};

export default MealsFavTabNavigator;
