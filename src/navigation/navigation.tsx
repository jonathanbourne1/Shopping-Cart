import React, {FC} from 'react';
//react Navigation
import {NavigationContainer} from '@react-navigation/native';
//stack
import {createStackNavigator} from '@react-navigation/stack';
//drawer
import {createDrawerNavigator} from '@react-navigation/drawer';
//interface
export interface Navigation {
  push: (route: string) => void;
  navigate: () => {route: string};
  toggleDrawer: () => void;
  setOptions: (arguments: object) => void;
  route: {
    name: string;
    params: object;
  };
}
//Screens
import ProductsOverView from '../screens/shop/items-overview';
import ProductDetail from '../screens/shop/item-detail';
import ProductsCart from '../screens/shop/cart';
//userScreen
import NewItem from '../screens/user/new-Item';

//CREATE STACK NAVIGATOR
const Stack = createStackNavigator();

const StackNav: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ProductsOverView} name="shop.products" />
      <Stack.Screen component={ProductDetail} name="shop.details" />
      <Stack.Screen component={ProductsCart} name="shop.cart" />
      <Stack.Screen component={NewItem} name="shop.newItem" />
    </Stack.Navigator>
  );
};

const StackNewItem = createStackNavigator();
const newItemNav = () => {
  return (
    <StackNewItem.Navigator>
      <StackNewItem.Screen component={NewItem} name="user.new-item" />
    </StackNewItem.Navigator>
  );
};
const Drawer = createDrawerNavigator();

const drawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen component={StackNav} name="stack.Navigator" />
        <Stack.Screen component={newItemNav} name="stack.newItem" />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default drawerNav;
