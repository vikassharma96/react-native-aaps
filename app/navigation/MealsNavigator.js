import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import strings from '../config/strings';

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.accentColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.accentColor,
  headerTitleStyle: {
    // fontWeight: 'bold',
    fontFamily: strings.semiBold,
  },
  headerBackTitleStyle: {
    fontFamily: strings.regular,
  },
};

const MealsNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Categories}
      screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={routes.Categories}
        component={CategoriesScreen}
        options={{
          headerTitle: 'Meal Categories',
          headerLeft: () => (
            <TouchableOpacity
              style={{marginStart: 10}}
              onPress={() => props.navigation.toggleDrawer()}>
              <MaterialCommunityIcons color="white" size={24} name="menu" />
            </TouchableOpacity>
          ),
        }}
      />
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
