import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext, themes} from './config/theme-context';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';

enableScreens();

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
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
          <ShopNavigator />
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
}
