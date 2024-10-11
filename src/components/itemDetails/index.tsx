import {Text, View} from 'react-native';
import {styles} from './styles';
import {FC} from 'react';
import {IMealItem} from '../../../constants/interface';

const ItemDetails: FC<IMealItem> = ({
  affordability,
  complexity,
  duration,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsText, textStyle]}>
        DURATION : {duration}m
      </Text>
      <Text style={[styles.detailsText, textStyle]}>
        {affordability?.toUpperCase()}
      </Text>
      <Text style={[styles.detailsText, textStyle]}>
        {complexity?.toUpperCase()}
      </Text>
    </View>
  );
};

export default ItemDetails;
