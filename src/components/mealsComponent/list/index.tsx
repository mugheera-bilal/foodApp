import {Text, View} from 'react-native';
import {styles} from './styles';
import {FC} from 'react';
import {IMealItem} from '../../../../constants/interface';

const List: FC<IMealItem> = ({data}) => {
  return data.map((dataPoint: any) => (
    <View key={dataPoint} style = {styles.listContainer}>
      <Text>{dataPoint}</Text>
    </View>
  ));
};

export default List;
