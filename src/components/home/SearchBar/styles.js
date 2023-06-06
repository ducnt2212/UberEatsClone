import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },

  searchInput: {
    textInput: {
      backgroundColor: '#eee',
      borderRadius: 20,
      fontWeight: '700',
      marginTop: 7,
    },
    textInputContainer: {
      backgroundColor: '#eee',
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
  },

  leftIconContainer: {
    marginLeft: 10,
  },

  rightIconContainer: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },

  clockIconContainer: {
    marginRight: 6,
  },
});

export default styles;
