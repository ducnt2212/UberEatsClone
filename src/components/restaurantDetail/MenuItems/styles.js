import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  checkedBox: {
    borderRadius: 0,
  },

  uncheckedBox: {
    borderRadius: 0,
    borderColor: 'lightgray',
  },

  foodInfoContainer: {
    flex: 1, //alternative for width: 240
    justifyContent: 'space-evenly',
  },

  title: {
    fontSize: 19,
    fontWeight: '600',
  },

  image: marginLeft => ({
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: marginLeft ? marginLeft : 0,
  }),

  divider: {
    marginHorizontal: 20,
  },
});

export default styles;
