import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Divider} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

import HeaderTabs from '../../components/home/HeaderTabs';
import SearchBar from '../../components/home/SearchBar';
import styles from './styles';
import Categories from '../../components/home/Categories/';
import RestaurantItems, {
  localRestaurants,
} from '../../components/home/RestaurantItems/RestaurantItems';
import BottomTabs from '../../components/home/BottomTabs';

/** YELP API, cannot sign up in Viet Nam */
/** cosnt YELP_API_KEY = "..." */

function Home() {
  const navigation = useNavigation();

  // eslint-disable-next-line no-unused-vars
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const [city, setCity] = useState('San Francisco');

  /** Function to list the restaurants with specified type: delivery or pickup */
  const [activeTab, setActiveTab] = useState('Delivery');

  useEffect(() => {
    console.log('You are choosing', activeTab, 'restaurants in', city);
  }, [city, activeTab]);

  /**
   * const getRestaurantsFromYelp = () => {
   *  const yelpUrl = 'https://...location=${city}';
   *  const apiOptions = {
   *    headers: {
   *      Authorization: `Bearer ${YELP_API_KEY}`,
   *    };
   *
   *  retrun fetch(yelpUrl, apiOptions)
   *  .then(response => response.json)
   *  .then(json =>
   *    setRestaurantData(
   *      json.businesses.filter((business) =>
   *        business.transactions.includes(activeTab.toLowerCase())
   *       )
   *      )
   *     );
   * };
   *
   * useEffect((), {
   *  getRestaurantsFromYelp();
   * }, [city, activeTab]) */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTabContainer}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

export default Home;
