import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {RouteKeys} from '../../common/Constants';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate(RouteKeys.CHANGE_PASSWORD)}
          activeOpacity={0.8}>
          <Text style={styles.itemText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
