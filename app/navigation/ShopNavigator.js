import React from 'react';
import {Platform} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import colors from '../config/colors';
import strings from '../config/strings';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: strings.bold,
  },
  headerBackTitleStyle: {
    fontFamily: strings.regular,
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
};

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: 'Your Cart',
        }}
      />
    </Stack.Navigator>
  );
};

const OrdersNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'menu' : 'menu'}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen name="UserProducts" component={UserProductsScreen} />
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.primary,
      }}>
      <Drawer.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerLabel: 'Products',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons color={color} name="cart" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerLabel: 'Orders',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              color={color}
              name="clipboard-list-outline"
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerLabel: 'Admin',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              color={color}
              name="tooltip-plus-outline"
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default ShopNavigator;
