import React from 'react';
import {TouchableOpacity, StyleSheet, I18nManager} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../theme/Colors';

const BackButton = ({
  reset = false,
  navigation,
  customStyles,
  iconSize = 40,
  iconColor = Colors.white,
  onPress,
}) => {
  const backButton = () => {
    if (!reset) {
      navigation.goBack();
    } else {
      navigation.popToTop();
    }
  };
  return (
    <TouchableOpacity
      style={[styles.button, customStyles]}
      onPress={onPress || backButton}
      activeOpacity={0.8}>
      <MaterialIcons
        name={
          I18nManager.isRTL ? 'keyboard-arrow-right' : 'keyboard-arrow-left'
        }
        size={iconSize}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 0,
    top: 40,
    padding: 10,
  },
});
