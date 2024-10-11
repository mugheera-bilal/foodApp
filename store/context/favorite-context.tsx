import {createContext, FC, useState} from 'react';
import {IContextProvider} from '../../constants/interface';

export const FavoriteContext: any = createContext({
  ids: [],
  addFavorite: (id: number) => {},
  removeFavorite: (id: number) => {},
});

const FavoriteContextProvider: FC<IContextProvider> = ({children}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<number[]>([]);

  function addFavorite(id: number) {
    setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id: number) {
    setFavoriteMealIds(currentMeals =>
      currentMeals.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
