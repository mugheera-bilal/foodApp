import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import CategoriesScreen from './src/screens/categoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealsDetails from './src/screens/mealsDetails';
import FavouritesScreen from './src/screens/favoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
// import FavoriteContextProvider from './store/context/favorite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#752500'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#302825'},
        drawerContentStyle: {backgroundColor: '#302825'},
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#dfa17e',
        drawerActiveTintColor: '#302825',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}: any) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({color, size}: any) => {
            return <Ionicons name="heart" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
 
    <Provider store={store}>

      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#752500'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#302825'},
            }}>
            <Stack.Screen
              name="Meals Categories"
              component={DrawerNavigation}
              options={{title: 'All Categories', headerShown: false}}
              />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
              />
            <Stack.Screen
              name="MealDetails"
              component={MealsDetails}
              options={{
                title: 'About The Meals',
              }}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {},
});

export default App;
