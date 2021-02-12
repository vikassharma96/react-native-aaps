import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext, themes} from './config/theme-context';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './navigation/MainNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themes.light}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
}
