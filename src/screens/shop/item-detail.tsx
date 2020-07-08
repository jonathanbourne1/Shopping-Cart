import React, {FC} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Navigation} from '../../navigation/navigation';
interface Props {
  navigation: Navigation;
}

const ProductDetail: FC<Props> = (props) => {
  const {navigation} = props;
  console.log(props);
  return (
    <>
      <View>
        <Text>Product Detail</Text>
        <Button
          title="go to details"
          onPress={() => {
            navigation.push('shop.cart');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ProductDetail;
