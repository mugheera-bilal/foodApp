import { Text, View } from "react-native";
import { styles } from "./styles";

function Subtitle ({children} : any) {
    return(
        <View style={styles.subTitleContainer}>
        <Text style={styles.titleText}>{children}</Text>
      </View>
    )
}

export default Subtitle