import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../../theme/Colors';
import {noop} from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import {ButtonTypes, GradientProps} from '../../common/Constants';
import FontStyles from '../../theme/Fonts';

const PrimaryButton = props => {
  const {
    text = '',
    type = ButtonTypes.Filled,
    onPress = noop,
    customContainerStyles,
    customTextStyles,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={[styles.container, customContainerStyles]}>
      {type === ButtonTypes.Filled ? (
        <LinearGradient style={styles.primaryButton} {...GradientProps}>
          <Text style={[styles.primaryButtonText, customTextStyles]}>
            {text}
          </Text>
        </LinearGradient>
      ) : (
        <View style={[styles.primaryButton, styles.outlinedButton]}>
          <Text
            style={[
              styles.primaryButtonText,
              styles.outlinedButtonText,
              customTextStyles,
            ]}>
            {text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  primaryButton: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  primaryButtonText: {
    ...FontStyles.headingRegular,
    color: Colors.white,
    paddingVertical: 10,
    letterSpacing: 1,
    textAlign: 'center',
    fontWeight: '600',
  },
  outlinedButton: {
    borderWidth: 2,
    backgroundColor: Colors.white,
    borderColor: Colors.primaryDark,
  },
  outlinedButtonText: {
    color: Colors.primaryDark,
  },
});
