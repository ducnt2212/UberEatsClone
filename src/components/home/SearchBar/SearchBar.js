import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        /** Google Places Api
         query={{key: ''}} */
        /** Fake function for below onPress function */
        textInputProps={{
          onChangeText: text => {
            props.cityHandler(text);
          },
        }}
        onPress={(data, details = null) => {
          /** Get the data when click on listed data */
          console.log(data.description);
          const city = data.description.split(',')[0];
          props.cityHandler(city);
        }}
        placeholder="Search"
        styles={styles.searchInput}
        renderLeftButton={() => (
          <View style={styles.leftIconContainer}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightIconContainer}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={styles.clockIconContainer}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

export default SearchBar;
