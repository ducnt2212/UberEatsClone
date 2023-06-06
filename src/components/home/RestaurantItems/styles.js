import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  restaurantItemInterfereContainer: {
    marginBottom: 30,
  },
  restaurantItemContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },

  image: {
    width: '100%',
    height: 180,
  },

  heartIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },

  restaurantInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  restaurantName: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  cookingDurationText: {
    fontSize: 13,
    color: 'gray',
  },

  ratingTextContainer: {
    backgroundColor: '#eee',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
