import {Pressable, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { FC } from 'react';
import { IMealItem } from '../../../constants/interface';

const IconButton : FC<IMealItem> = ({onPress, icon , color}) => {
  return (
    <Pressable onPress={onPress} style = {({pressed}) => pressed && styles.pressed}>
      <Icon name={icon} size={30} color={color} />
    </Pressable>
  );
}

export default IconButton;
