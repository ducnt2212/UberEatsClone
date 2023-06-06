import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

function HeaderTabs(props) {
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

export default HeaderTabs;

function HeaderButton(props) {
  return (
    <TouchableOpacity
      onPress={() => props.setActiveTab(props.text)}
      style={styles.buttonContainer(props.activeTab, props.text)}>
      <Text style={styles.buttonText(props.activeTab, props.text)}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
