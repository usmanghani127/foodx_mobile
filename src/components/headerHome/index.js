import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {noop} from 'lodash';
import Colors from '../../theme/Colors';
import {GradientProps} from '../../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import VectorIcon, {ICON_TYPES} from '../../components/VectorIcon';
import BackButton from '../../components/backButton';
import CustomStatusBar from '../../components/statusBar';

const HeaderHome = ({navigation, showBackButton = false}) => {
  const LeftButton = () => {
    return showBackButton ? (
      <BackButton
        navigation={navigation}
        customStyles={styles.backButton}
        reset={true}
      />
    ) : (
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <MaterialCommunityIcons name={'menu'} size={30} color={Colors.white} />
      </TouchableOpacity>
    );
  };

  const ActionBar = () => {
    return (
      <TouchableOpacity
        style={styles.body}
        onPress={() => {}}
        activeOpacity={0.8}>
        <Text style={styles.searchBarInput}>Search Food and Restaurants </Text>
        <View style={styles.search}>
          <VectorIcon
            iconName={'search-outline'}
            iconType={ICON_TYPES.Ionicons}
            size={20}
            color={Colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const RightButton = () => {
    return (
      <TouchableOpacity onPress={() => noop()}>
        <SimpleLineIcons name={'bell'} size={25} color={Colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient {...GradientProps}>
      <CustomStatusBar />
      <View style={styles.headView}>
        {LeftButton()}
        {ActionBar()}
        {RightButton()}
      </View>
    </LinearGradient>
  );
};

export default HeaderHome;
