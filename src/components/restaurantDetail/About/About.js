import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

/** YELP API, cannot sign up in Viet Nam
  name: 'Farmhouse Kitchen Thai Cuisine',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJKaFsssXjhu5QlUnKexHb2yg1TnMuOWKIg&usqp=CAU',
  price: '$$',
  review_count: '1500',
  rating: 4.5,
  categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
};*/

function About(props) {
  const {name, image, price, reviews, rating, categories} = props.route.params;

  const formattedCategories = categories.map(cat => cat.title).join(' * ');

  const description = `${formattedCategories} ${
    price ? `* ${price}` : null
  } * 💳 * ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

export default About;

function RestaurantImage(props) {
  return <Image source={{uri: props.image}} style={styles.image} />;
}

function RestaurantName(props) {
  return <Text style={styles.title}>{props.name}</Text>;
}

function RestaurantDescription(props) {
  return <Text style={styles.description}>{props.description}</Text>;
}
