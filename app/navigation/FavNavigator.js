import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Platform} from 'react-native';
import colors from '../config/colors';

const Stack = createStackNavigator();

const FavNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.FavoritesScreen}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={routes.FavoritesScreen} component={FavoritesScreen} />
      <Stack.Screen name={routes.MealDetail} component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavNavigator;
