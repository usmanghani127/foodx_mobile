import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../theme/Colors';
import {APP_NAME, GradientProps, ScreenHeight} from '../../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../backButton';
import FontStyles from '../../theme/Fonts';
import CustomStatusBar from '../statusBar';

const HeaderMain = ({navigation, text = '', showBackButton = true}) => {
  return (
    <LinearGradient style={styles.container} {...GradientProps}>
      <CustomStatusBar />
      {showBackButton && <BackButton navigation={navigation} />}
      <View style={styles.circle}>
        <Text style={styles.appNameLogo}>{APP_NAME}</Text>
      </View>
      <Text style={styles.signIn}>{text}</Text>
    </LinearGradient>
  );
};

export default HeaderMain;

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight * 0.275,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: ScreenHeight * 0.1,
    width: ScreenHeight * 0.1,
    borderRadius: ScreenHeight * 0.05,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  abbreviation: {
    ...FontStyles.regularPrimary,
    fontSize: 50,
  },
  signIn: {
    ...FontStyles.regularBold,
    fontSize: 30,
    marginVertical: 10,
    color: Colors.white,
  },
  appNameLogo: {
    ...FontStyles.headingPrimary,
    fontSize: 25,
  },
});
