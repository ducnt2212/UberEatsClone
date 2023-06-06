import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import styles from './styles';

function Categories() {
  return (
    <View style={styles.imagesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.imageText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categories;

const items = [
  {
    text: 'Pick-up',
    image: require('../../../utils/images/shopping-bag.png'),
  },
  {
    text: 'Soft Drinks',
    image: require('../../../utils/images/soft-drink.png'),
  },
  {
    text: 'Bakery Items',
    image: require('../../../utils/images/bread.png'),
  },
  {
    text: 'Fast Foods',
    image: require('../../../utils/images/fast-food.png'),
  },
  {
    text: 'Coffe & Tea',
    image: require('../../../utils/images/coffee.png'),
  },
  {
    text: 'Dessets',
    image: require('../../../utils/images/desserts.png'),
  },
];
