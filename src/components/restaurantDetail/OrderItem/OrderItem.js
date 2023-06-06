import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

function OrderItem({item}) {
  const {title, price} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.priceText}>{price}</Text>
    </View>
  );
}

export default OrderItem;
