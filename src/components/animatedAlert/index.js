import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../theme/Colors';
import VectorIcon, {ICON_TYPES} from '../VectorIcon';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import FontStyles from '../../theme/Fonts';

const AnimatedAlert = ({
  visible = true,
  text = 'No Data to Display',
  icon = {iconName: 'hourglass-empty', iconType: ICON_TYPES.MaterialIcons},
}) => {
  const textSize = useSharedValue(25);
  const rotation = useSharedValue(0);

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: withSpring(textSize.value),
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(withTiming(25), Number.MAX_SAFE_INTEGER, true);
    textSize.value = withSpring(16);
  });

  return visible ? (
    <View style={styles.container}>
      <Animated.View style={iconStyle}>
        <VectorIcon {...icon} size={40} color={Colors.primaryDark} />
      </Animated.View>
      <Animated.Text style={[styles.text, textStyle]}>{text}</Animated.Text>
    </View>
  ) : null;
};

export default AnimatedAlert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    ...FontStyles.titlePrimary,
    marginVertical: 10,
  },
});
