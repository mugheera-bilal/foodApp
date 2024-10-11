import { StyleSheet } from "react-native";
import { Fonts } from "../../../../constants/Fonts";

export const styles = StyleSheet.create({
    titleText: {
        fontFamily: Fonts.anton,
        textAlign: 'center',
        color: 'white',
      },
      
      subTitleContainer: {
          padding : 10,
          margin: 10,
          borderBottomWidth: 2,
          borderBottomColor: 'white',
        },
})