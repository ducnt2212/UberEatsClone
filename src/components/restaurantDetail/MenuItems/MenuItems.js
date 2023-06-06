import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Divider} from '@rneui/themed';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';

function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}) {
  const dispatch = useDispatch();

  function selectItem(item, checkboxValue) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  }

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  function isFoodInCart(food, cartItems) {
    return Boolean(cartItems.find(item => item.title === food.title));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={styles.checkedBox}
                innerIconStyle={styles.uncheckedBox}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={checkboxValue => {
                  selectItem(food, checkboxValue);
                }}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider width={0.5} orientation="vertical" style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
}

export default MenuItems;

function FoodInfo(props) {
  return (
    <View style={styles.foodInfoContainer}>
      <Text style={styles.title}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
}

function FoodImage({marginLeft, ...props}) {
  return (
    <View>
      <Image
        source={{uri: props.food.image}}
        style={styles.image(marginLeft)}
      />
    </View>
  );
}
