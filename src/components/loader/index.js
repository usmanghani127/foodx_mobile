import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '../../theme/Colors';

const Loader = props => {
  const {visible = true} = props;
  return visible ? (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} color={Colors.primaryDark} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.65,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default Loader;
