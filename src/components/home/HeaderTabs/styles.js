import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  buttonContainer: (activeTab, text) => ({
    backgroundColor: activeTab === text ? 'black' : 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  }),

  buttonText: (activeTab, text) => ({
    color: activeTab === text ? 'white' : 'black',
    fontSize: 15,
    fontWeight: '900',
  }),
});

export default styles;
