import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const Section = ({children, customStyles}) => {
  return <View style={[styles.section, customStyles]}>{children}</View>;
};

export default Section;

const styles = StyleSheet.create({
  section: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 5,
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: Colors.transparent,
    backgroundColor: Colors.white,
  },
});
