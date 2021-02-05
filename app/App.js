import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext, themes} from './config/theme-context';
import MealsNavigator from './navigation/MealsNavigator';
import {useEffect} from 'react/cjs/react.development';
import SplashScreen from 'react-native-splash-screen';
import MealsFavTabNavigator from './navigation/MealsFavTabNavigator';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ThemeContext.Provider value={themes.light}>
      <NavigationContainer>
        <MealsFavTabNavigator />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
