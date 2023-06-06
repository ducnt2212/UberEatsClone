import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 45,
    zIndex: 1,
    marginHorizontal: 45,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },

  text: {
    fontSize: 20,
    color: 'white',
    marginRight: 30,
  },

  totalPriceText: {
    color: 'white',
    fontSize: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  checkoutModalContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },

  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },

  checkoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  checkoutButtonInterfereContainer: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },

  checkoutButtonText: {
    color: 'white',
    fontSize: 20,
  },

  totalText: {
    color: 'white',
    position: 'absolute',
    right: 20,
    fontSize: 15,
    top: 17,
  },

  loadingAnimationContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  loadingAnimation: {
    height: 200,
  },
});

export default styles;
