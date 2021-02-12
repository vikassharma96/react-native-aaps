import React from 'react';
import routes from './routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealsFavTabNavigator from './MealsFavTabNavigator';
import FiltersNavigator from './FiltersNavigator';
import colors from '../config/colors';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.primaryColor,
        // itemStyle: {marginVertical: 30},
      }}>
      <Drawer.Screen
        name={routes.MealsFav}
        component={MealsFavTabNavigator}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen name={routes.Filters} component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
