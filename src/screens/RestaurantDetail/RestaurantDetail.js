import React from 'react';
import {View} from 'react-native';
import {Divider} from '@rneui/themed';

import About from '../../components/restaurantDetail/About';
import styles from './styles';
import MenuItems from '../../components/restaurantDetail/MenuItems';
import ViewCart from '../../components/restaurantDetail/ViewCart';

function RestaurantDetail({route, navigation}) {
  return (
    <View style={styles.container}>
      <About route={route} />
      <Divider width={1.8} style={styles.divider} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}

export default RestaurantDetail;

/** Dummy Data for Menu */
const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wHd1v4xbK6JlNJSGy9bqS_8oosXaaW4ffw&usqp=CAU',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken oof the sizzles 🔥',
    price: '$19.20',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBm2TxWUMkauhOloKnDWG1hOYYWB0-uNvLJQ&usqp=CAU',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa_RldG56n6bTWYVYkaMZDMx7zNu_UnrENg&usqp=CAU',
  },
  {
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqWCmfcdi8NbqFWtXCjrSOfmOwfFzk3K5Fg&usqp=CAU',
  },
  {
    title: 'LasagnaA',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wHd1v4xbK6JlNJSGy9bqS_8oosXaaW4ffw&usqp=CAU',
  },
];
