import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../../constants/Fonts';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    margin: 20,
    // padding: 10,
    backgroundColor: '#c94343ff',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  titleContainer: {
    margin: 10,
    padding: 10,
  },
  titleText: {
    fontFamily: Fonts.anton,
    textAlign: 'center',
  },
  imageContainer: {
    // borderWidth: 2,
    // borderRadius: 10,
    width: '101%',
    height: 200,
    resizeMode: 'cover',
  },

 
});
