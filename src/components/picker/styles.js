import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import FontStyles from '../../theme/Fonts';
import {ScreenHeight, ScreenWidth} from '../../common/Constants';

export default StyleSheet.create({
  pickerContainer: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    ...FontStyles.regular,
    letterSpacing: 1.5,
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  modalContainer: {
    backgroundColor: Colors.blackFaded,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  containerIOS: {
    width: ScreenWidth,
    backgroundColor: Colors.white,
    height: ScreenHeight,
  },
  containerAndroid: {
    width: ScreenWidth * 0.8,
    backgroundColor: Colors.white,
    maxHeight: ScreenHeight * 0.8,
  },
  heading: {
    margin: 15,
    ...FontStyles.headingRegular,
  },
  headingIOS: {
    ...FontStyles.headingRegular,
    marginTop: ScreenHeight * 0.06,
  },
  pickerHeadingIOS: {
    backgroundColor: Colors.background,
    height: ScreenHeight * 0.11,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.faint,
  },
  pickerItem: {
    borderTopWidth: 1,
    borderColor: Colors.background,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  pickerItemText: {
    ...FontStyles.titleRegular,
    padding: 5,
    paddingHorizontal: 10,
  },
  picker: {
    paddingTop: 0,
    paddingBottom: 0,
    height: 18,
    width: 160,
  },
  placeholder: {
    color: Colors.description,
    letterSpacing: 1.5,
    paddingVertical: 5,
  },
  input: {
    ...FontStyles.titleRegular,
    letterSpacing: 1.5,
    paddingLeft: 0,
    paddingRight: 0,
    paddingVertical: 5,
  },
  pickerItemIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
