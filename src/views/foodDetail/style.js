import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import {ScreenHeight, ScreenWidth} from '../../common/Constants';
import FontStyles from '../../theme/Fonts';

export default StyleSheet.create({
  image: {
    width: ScreenWidth,
    height: ScreenHeight * 0.3,
    alignSelf: 'center',
    borderRadius: 2,
  },
  scrollView: {
    backgroundColor: Colors.background,
    paddingHorizontal: 15,
  },
  detailSection: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 15,
    marginVertical: 5,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  title: {
    ...FontStyles.headingRegular,
    flex: 1,
    textAlign: 'left',
  },
  priceContainer: {
    marginHorizontal: 5,
  },
  price: {
    ...FontStyles.headingPrimary,
  },
  description: {
    ...FontStyles.descriptionRegular,
    marginHorizontal: 5,
  },
  empty: {
    height: 50,
    width: ScreenWidth,
  },
});
