import {StyleSheet} from 'react-native';
import FontStyles from '../../theme/Fonts';

export default StyleSheet.create({
  main: {
    flex: 1,
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
    textAlign: 'center',
  },
  signUpText: {
    margin: 5,
    padding: 5,
    ...FontStyles.headingPrimary,
  },
  input: {
    marginVertical: 30,
  },
});
