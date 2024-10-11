import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {FC} from 'react';
import {ICategoryGridTile} from '../../../constants/interface';

const CategoryGridTile: FC<ICategoryGridTile> = ({title, color, onPress}) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonContainer : null,
        ]}
        onPress = {onPress}
        android_ripple={{color: 'grey'}}>
        <View style={[styles.boxContainer, {backgroundColor: color}]}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
