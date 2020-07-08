import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native';
import {Navigation} from '../../navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';
interface Props {
  navigation: Navigation;
}

const ItemsOverView: FC<Props> = (props) => {
  const {navigation} = props;
  console.log(props);
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
