import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native';
import {Navigation} from '../../navigation/navigation';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/header-button';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  navigation: Navigation;
}

const ItemsOverView: FC<Props> = (props) => {
  const {navigation} = props;
  console.log(props);
  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="cart"
          iconName="ios-cart-outline"
          iconSize={32}
          onPress={() => {
            navigation.push('shop.cart');
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <Icon name="menu" size={32} onPress={() => navigation.toggleDrawer()} />
    ),
  });
  return (
    <>
      <View>
        <Text>ItemsOverView</Text>
        <Button
          title="go to details"
          onPress={() => {
            navigation.push('shop.details');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ItemsOverView;
