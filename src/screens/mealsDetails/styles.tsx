import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../constants/Fonts';

export const styles = StyleSheet.create({
  rootContainer: {
    marginBottom : 20,
  },
  imageContainer: {
    width: '101%',
    height: 200,
    resizeMode: 'cover',
  },
  additionalStyle: {
    color: 'white',
  },
  titleText: {
    fontFamily: Fonts.anton,
    textAlign: 'center',
    color: 'white',
  },
  listOuterContainer : {
    alignItems : 'center'

  },
  listContainer : {
    width : '80%'
  }

});
