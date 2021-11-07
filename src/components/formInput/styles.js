import {StyleSheet, Platform, I18nManager} from 'react-native';
import Colors from '../../theme/Colors';
import FontStyles from '../../theme/Fonts';

export default StyleSheet.create({
  formInputContainer: {
    paddingVertical: 5,
    flex: 1,
    marginHorizontal: 2.5,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  formInput: {
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: Colors.transparent,
    backgroundColor: Colors.white,
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    ...FontStyles.titleRegular,
    letterSpacing: 1.5,
    paddingVertical: Platform.OS === 'android' ? 2.5 : 10,
    flex: 1,
    paddingLeft: 0,
    marginHorizontal: 5,
    paddingRight: 0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  eye: {
    color: Colors.description,
    paddingHorizontal: 10,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  radioText: {
    textAlign: 'left',
    ...FontStyles.regularPrimary,
    marginHorizontal: 5,
  },
  perkText: {
    ...FontStyles.descriptionRegular,
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingVertical: 2.5,
  },
});
