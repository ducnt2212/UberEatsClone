import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
/** For Animation */
import AnimatedLottieView from 'lottie-react-native';

import styles from './styles';

import firebase from '../../components/firebase/firebase';

import MenuItems from '../../components/restaurantDetail/MenuItems/MenuItems';

function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Bologna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wHd1v4xbK6JlNJSGy9bqS_8oosXaaW4ffw&usqp=CAU',
      },
    ],
  });

  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubcribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot =>
        snapshot.docs.map(doc => {
          setLastOrder(doc.data());
        }),
      );
    /** Write as below instead of 'return unsubcribe()' to run the function */
    return () => unsubcribe();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <AnimatedLottieView
          style={styles.checkMarkAnimationContainer}
          source={require('../../utils/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.restaurantNameText}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <AnimatedLottieView
            style={styles.cookingAnimationContainer}
            source={require('../../utils/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default OrderCompleted;
