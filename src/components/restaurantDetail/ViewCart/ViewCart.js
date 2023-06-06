import React, {useState} from 'react';
import {TouchableOpacity, View, Modal, Text} from 'react-native';
import {useSelector} from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';

import styles from './styles';
import OrderItem from '../OrderItem/OrderItem';

import firebase from '../../firebase/';

function ViewCart({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);

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

  function addOrderToFirebase() {
    setLoading(true);

    const db = firebase.firestore();

    db.collection('orders')
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('OrderCompleted');
        }, 2500);
      });
  }

  function checkoutModalContent() {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={styles.checkoutButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisible(false);
                }}
                style={styles.checkoutButtonInterfereContainer}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
                <Text style={styles.totalText}>{total ? totalUSD : ''}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.page}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.buttonContainer}>
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.totalPriceText}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View style={styles.loadingAnimationContainer}>
          <AnimatedLottieView
            style={styles.loadingAnimation}
            source={require('../../../utils/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

export default ViewCart;
