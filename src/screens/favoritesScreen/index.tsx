import MealsList from '../../components/mealList/mealsList';
import {useContext} from 'react';
// import {FavoriteContext} from '../../../store/context/favorite-context';
import {MEALS} from '../../../data/dummy-data';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';

function FavouritesScreen() {
  // const favoriteMealsctx: any = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state : any)=> state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal: any) => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}> 
        <Text style= {styles.text}>You Have No Favorite Meals</Text>
    </View>
  }
  
  return <MealsList items={favoriteMeals} />;
} 

export default FavouritesScreen;
