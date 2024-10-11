import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {FC} from 'react';
import {IMealItem} from '../../../../constants/interface';
import { useNavigation } from '@react-navigation/native';
import ItemDetails from '../../itemDetails';

const MealItem: FC<IMealItem> = ({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) => {
  const imageSource: ImageSourcePropType = {uri: imageUrl};

  const navigation : any = useNavigation()

  function MealDetailsNavHandler() {
    navigation.navigate('MealDetails',{
      mealId : id
    })
  }

  return (
    <View style = {styles.rootContainer}>
      <Pressable onPress= {MealDetailsNavHandler} android_ripple={{color : 'grey'}}>
        <View>
          <Image
            source={imageSource}
            style={styles.imageContainer}
            onError={e =>
              console.log('Image failed to load:', e.nativeEvent.error)
            }
          />
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <ItemDetails duration = {duration} affordability={affordability} complexity={complexity}/> 
        
      </Pressable>
    </View>
  );
};

export default MealItem;

