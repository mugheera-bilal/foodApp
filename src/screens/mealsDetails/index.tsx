import { Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {MEALS} from '../../../data/dummy-data';
import {FC, useLayoutEffect} from 'react';
import {IMealItem} from '../../../constants/interface';
import ItemDetails from '../../components/itemDetails';
import Subtitle from '../../components/mealsComponent/subtitle';
import List from '../../components/mealsComponent/list';
import IconButton from '../../components/iconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../store/redux/favorite';
// import {FavoriteContext} from '../../../store/context/favorite-context';

const MealsDetails: FC<IMealItem> = ({route, navigation}) => {
  // const favoriteMealsctx : any = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state : any) => state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavorite : any = favoriteMealIds.includes(mealId)

  function changefavoriteHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({id : mealId}))
      // favoriteMealsctx.removeFavorite(mealId)
    } else {
      dispatch(addFavorite({id : mealId}))
      // favoriteMealsctx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'heart' : 'heart-outline'}
            color="white"
            onPress={changefavoriteHandler}
          />
        );
      },
    });
    // console.log('preesssssed');
  }, [navigation, changefavoriteHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{uri: selectedMeal?.imageUrl}}
        style={styles.imageContainer}
      />
      <Text style={styles.titleText}>{selectedMeal?.title}</Text>
      <ItemDetails
        duration={selectedMeal?.duration}
        affordability={selectedMeal?.affordability}
        complexity={selectedMeal?.complexity}
        textStyle={styles.additionalStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealsDetails;
