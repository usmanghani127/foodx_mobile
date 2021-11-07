import {StyleSheet} from 'react-native';
import FontStyles from '../../theme/Fonts';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  primaryButton: {
    marginTop: 50,
    marginBottom: 25,
  },
  signUpContainer: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpDescription: {
    ...FontStyles.regular,
  },
  signUpText: {
    margin: 5,
    padding: 5,
    ...FontStyles.headingPrimary,
  },
  forgotPassword: {
    textAlign: 'left',
  },
});
