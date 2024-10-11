import {CATEGORIES, MEALS} from '../../../data/dummy-data';
import { useLayoutEffect} from 'react';
import MealsList from '../../components/mealList/mealsList';

function MealsOverviewScreen({route, navigation}: any) {
  const catId = route.params.categoryId;
  
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    )?.title;
    
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>



}

export default MealsOverviewScreen;
