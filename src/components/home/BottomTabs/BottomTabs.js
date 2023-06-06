import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

export default BottomTabs;

function Icon(props) {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5 name={props.icon} size={25} style={styles.icon} />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
