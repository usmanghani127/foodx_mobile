import {Platform, StyleSheet} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../common/Constants';
import Colors from '../../theme/Colors';
import FontStyles from '../../theme/Fonts';

export default StyleSheet.create({
  imageBackground: {
    width: ScreenWidth,
    height: ScreenHeight * 0.25,
  },
  headView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ScreenHeight * (Platform.OS === 'android' ? 0.04 : 0.05),
    marginBottom: 30,
    marginHorizontal: 10,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  searchBarInput: {
    flex: 1,
    marginHorizontal: 5,
    ...FontStyles.titleRegular,
    textAlign: 'left',
  },
  search: {
    backgroundColor: Colors.primaryLight,
    height: 40,
    width: 40,
    borderWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'relative',
    top: 0,
    left: 0,
    padding: 0,
  },
});
