import { FlatList, View } from "react-native";
import { styles } from "./styles";
import MealItem from "../mealItem";

function MealsList ({items} : any) {
    function renderMealItem(itemData: any) {
        const item = itemData.item;
    
        const mealItemProps = {
          id : item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
        };
    
        return <MealItem {...mealItemProps} />;
      }
    
      return (
        <View style={styles}>
          <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealsList