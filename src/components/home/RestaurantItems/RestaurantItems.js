import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

function RestaurantItems({navigation, ...props}) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.restaurantItemInterfereContainer}
          onPress={() =>
            navigation.navigate('RestaurantDetail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }>
          <View key={index} style={styles.restaurantItemContainer}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

export default RestaurantItems;

function RestaurantImage(props) {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <TouchableOpacity style={styles.heartIcon}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
}

function RestaurantInfo(props) {
  return (
    <View style={styles.restaurantInfoContainer}>
      <View>
        <Text style={styles.restaurantName}>{props.name} </Text>
        <Text style={styles.cookingDurationText}>30-45 * min</Text>
      </View>
      <View style={styles.ratingTextContainer}>
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
}

/** Dummy Data */
export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT247-dOOGMSvJHXwL-HPMliOkg6grIQTQ7NA&usqp=CAU',

    categories: [{title: 'Cafe'}, {title: 'Bar'}],
    price: '$$',
    review_count: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHcarSRB2t_dUfwnK8yJH3IhTcFs2dVns_A&usqp=CAU',
    categories: [{title: 'Cafe'}, {title: 'Bar'}],
    price: '$$',
    review_count: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSG9T6Bo3agaPnewyNAG6z2wWTY066jnDXg&usqp=CAU',
    categories: [{title: 'Indian'}, {title: 'Bar'}],
    price: '$$',
    review_count: 700,
    rating: 4.9,
  },
];
