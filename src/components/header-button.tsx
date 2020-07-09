import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
//header Button
import {HeaderButton} from 'react-navigation-header-buttons';
//icons
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({});
const Icons: FC<{}> = (props) => {
  return (
    <HeaderButton {...props} IconComponent={Icon} iconSize={23} color="black" />
  );
};

export default Icons;
