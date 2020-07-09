import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
//import interface
import {Navigation} from '../../navigation/navigation';
//icon
import Icon from 'react-native-vector-icons/Ionicons';
//interface
interface Props {
  navigation: Navigation;
}
const NewItem: FC<Props> = (props) => {
  const {navigation} = props;
  navigation.setOptions({
    headerLeft: () => (
      <Icon name="menu" size={32} onPress={() => navigation.toggleDrawer()} />
    ),
  });
  return (
    <>
      <View>
        <Text>NewItem</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default NewItem;
