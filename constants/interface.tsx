import { ReactNode } from "react";

export interface ICategoryGridTile {
  title?: string;
  color?: string;
  onPress?: any;
}

export interface IMealItem {
  navigation?: any;
  route?: any;
  id?: string;
  title?: string;
  affordability?: string;
  complexity?: string;
  imageUrl?: string;
  duration?: number;
  ingredients?: string;
  steps?: string;
  isGlutenFree?: boolean;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isLactoseFree?: boolean;
  onPress?: () => void;
  style?: any;
  textStyle?: any;
  data?: any;
  icon?: any;
  color?: string;
}


export interface IContextProvider {
  children? : any
}
