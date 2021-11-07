import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../views/home';
import {ImageTypes, RouteKeys} from '../common/Constants';
import Image from '../components/image';
import Colors from '../theme/Colors';
import {isEmpty} from 'lodash';
import styles from './styles';
import VectorIcon, {ICON_TYPES} from '../components/VectorIcon';
import Images from '../theme/Images';
import {useUser} from '../context/user';
import UserActions from '../adaptors/user';

const Drawer = createDrawerNavigator();

const DrawerContent = props => {
  const {state: {user = {}} = {}, dispatch} = useUser();
  const {
    email = '',
    profilePicture = '',
    firstName = '',
    lastName = '',
    coverPicture = '',
  } = user;

  const {navigation} = props;

  const drawerEntries = [
    {
      label: 'Settings',
      icon: (
        <VectorIcon
          iconName={'settings'}
          iconType={ICON_TYPES.MaterialIcons}
          size={25}
          color={Colors.primaryDark}
        />
      ),
      onPress: () => props.navigation.navigate(RouteKeys.SETTINGS),
    },
    {
      label: 'Help',
      icon: (
        <VectorIcon
          iconName={'help'}
          iconType={ICON_TYPES.MaterialIcons}
          size={25}
          color={Colors.primaryDark}
        />
      ),
      onPress: () => {},
    },
  ];

  const drawerHeader = () => (
    <>
      <Image
        style={styles.profileContainer}
        source={coverPicture}
        defaultImage={Images.gradientImage}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.profile}
        onPress={() => {}}>
        <Image
          source={profilePicture}
          size={'large'}
          resizeMode={isEmpty(user) ? 'contain' : 'cover'}
          imageType={ImageTypes.ProfilePicture}
          defaultImage={isEmpty(user) ? Images.halfLogo : null}
          abbreviation={`${firstName[0] || ''}${lastName[0] || ''}`}
        />
        <View style={styles.profileTextContainer}>
          {isEmpty(user) ? (
            <Text style={styles.profileText}>Sign In</Text>
          ) : (
            <>
              <Text
                style={styles.profileText}>{`${firstName} ${lastName}`}</Text>
              <Text style={styles.profileText}>{email}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.contentContainer}>
      {drawerHeader()}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {drawerEntries.map((item, index) => {
          const {label, onPress, icon} = item;
          return (
            <DrawerItem
              key={index.toString()}
              label={label}
              icon={() => icon}
              labelStyle={styles.label}
              onPress={() => {
                props.navigation.closeDrawer();
                onPress();
              }}
            />
          );
        })}
      </DrawerContentScrollView>
      <DrawerItem
        icon={() => (
          <VectorIcon
            iconType={ICON_TYPES.MaterialIcons}
            iconName={'logout'}
            size={25}
            color={Colors.primaryDark}
          />
        )}
        label={() => <Text style={styles.label}>Logout</Text>}
        onPress={() => {
          UserActions.Logout(dispatch, navigation);
        }}
      />
    </View>
  );
};

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName={RouteKeys.MAIN}
      drawerStyle={styles.drawer}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={RouteKeys.MAIN}
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerLabel: () => <Text style={styles.label}>Home</Text>,
          drawerIcon: () => (
            <VectorIcon
              iconName={'home'}
              iconType={ICON_TYPES.MaterialIcons}
              size={25}
              color={Colors.primaryDark}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
