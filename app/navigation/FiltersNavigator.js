import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FiltersScreen from '../screens/FiltersScreen';
import routes from './routes';
import colors from '../config/colors';
import strings from '../config/strings';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: strings.semiBold,
  },
  headerBackTitleStyle: {
    fontFamily: strings.regular,
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name={routes.FiltersScreen} component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default FiltersNavigator;
