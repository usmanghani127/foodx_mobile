import React from 'react';
import {StatusBar} from 'react-native';
import Colors from '../../theme/Colors';
import {useIsFocused} from '@react-navigation/native';

const CustomStatusBar = ({backgroundColor = Colors.transparent, barStyle}) => {
  const isFocused = useIsFocused();
  return (
    <StatusBar
      translucent
      animated
      networkActivityIndicatorVisible={true}
      backgroundColor={backgroundColor}
      barStyle={
        barStyle ? barStyle : isFocused ? 'light-content' : 'dark-content'
      }
    />
  );
};

export default CustomStatusBar;
