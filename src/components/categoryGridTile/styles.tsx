import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../constants/Fonts';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 20,
    height: 150,
    elevation: 20,
    borderRadius: 10,
    // borderWidth: 2,
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // padding : 50,
    // backgroundColor : 'red'
  },
  button: {
    flex: 1,
  },
  buttonContainer: {
    opacity: 0.5,
  },
  boxContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    // fontWeight : 'bold',
    fontSize: 18,
    color: 'black',
    fontFamily: Fonts.anton,
  },
});
