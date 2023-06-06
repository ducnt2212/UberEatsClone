import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },

  titleText: {
    fontWeight: '600',
    fontSize: 16,
  },

  priceText: {
    opacity: 0.7,
    fontSize: 16,
  },
});

export default styles;
