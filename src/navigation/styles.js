import {StyleSheet, Platform} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../common/Constants';
import FontStyles from '../theme/Fonts';
import Colors from '../theme/Colors';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  drawer: {
    width: ScreenWidth * 0.7,
  },
  profileContainer: {
    width: ScreenWidth * 0.654,
    height: ScreenHeight * (Platform.OS === 'ios' ? 0.23 : 0.25),
  },
  profile: {
    position: 'absolute',
    top: 0,
    left: 10,
    marginTop: 40,
  },
  profileTextContainer: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  profileText: {
    textAlign: 'left',
    ...FontStyles.headingRegular,
    color: Colors.white,
  },
  label: {
    textAlign: 'left',
    ...FontStyles.regularPrimary,
  },
  shopLogo: {
    width: 35,
    height: 35,
  },
});
