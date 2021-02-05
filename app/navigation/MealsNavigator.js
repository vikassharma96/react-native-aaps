import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native';
import colors from '../config/colors';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Categories}
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
      <Stack.Screen name={routes.Categories} component={CategoriesScreen} />
      <Stack.Screen
        name={routes.CategoryMeals}
        component={CategoryMealsScreen}
      />
      <Stack.Screen
        name={routes.MealDetail}
        component={MealDetailScreen}
        // options={{title: 'MealDetail'}}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
