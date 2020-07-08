import React, {FC} from 'react';
//react Navigation
import {NavigationContainer} from '@react-navigation/native';
//stack
import {createStackNavigator} from '@react-navigation/stack';
//drawer
import {createDrawerNavigator} from '@react-navigation/drawer';
//Screens
import ProductsOverView from '../screens/shop/items-overview';
import ProductDetail from '../screens/shop/item-detail';
import ProductsCart from '../screens/shop/cart';
//CREATE STACK NAVIGATOR
const Stack = createStackNavigator();

const StackNav: FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={ProductsOverView} name="shop.products" />
        <Stack.Screen component={ProductDetail} name="shop.details" />
        <Stack.Screen component={ProductsCart} name="shop.cart" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export interface Navigation {
  push: (route: string) => void;
  navigate: () => {route: string};
  setOptions: () => void;
  route: {
    name: string;
    params: object;
  };
}

export default StackNav;
