import {StyleSheet} from 'react-native';
import FontStyles from '../../theme/Fonts';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  itemContainer: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: Colors.white,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  itemText: {
    ...FontStyles.titleBold,
    padding: 15,
    textAlign: 'left',
  },
});
