import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imagesContainer: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,
  },

  imageContainer: {
    alignItems: 'center',
    marginRight: 30,
  },

  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },

  imageText: {
    fontSize: 13,
    fontWeight: '900',
  },
});

export default styles;
