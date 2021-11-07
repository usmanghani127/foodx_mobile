import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontStyles from '../../theme/Fonts';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
    paddingVertical: 15,
  },
  featuredFood: {
    alignItems: 'center',
  },
  heading: {
    marginHorizontal: 15,
    ...FontStyles.headingPrimary,
  },
});
