import {CATEGORIES} from '../../../data/dummy-data';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import CategoryGridTile from '../../components/categoryGridTile';


function CategoriesScreen({navigation} : any) {

  function renderCategoryItem(itemData: any) {
    function mealsOverviewNavHandler() {
      navigation.navigate('Meals Overview', {
        categoryId : itemData.item.id
      })
    }

    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={mealsOverviewNavHandler}/>
    );
  }
  
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
