import React from 'react';
import {Dimensions} from 'react-native';
import Colors from '../theme/Colors';
import VectorIcon, {ICON_TYPES} from '../components/VectorIcon';

export const PAGE_LIMIT = 10;
export const APP_NAME = 'Food X';

export const URL = 'http://localhost:3000';

export const WindowWidth = Dimensions.get('window').width;
export const WindowHeight = Dimensions.get('window').height;
export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;

export const GradientProps = {
  colors: Colors.primaryGradient,
  locations: [0.4, 0.6],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
  useAngle: true,
  angle: 120,
  angleCenter: {x: 0.5, y: 0.5},
};

export const ButtonTypes = {
  Filled: 'filled',
  Outlined: 'outlined',
};

export const RouteKeys = {
  INITIAL: 'Initial',
  LOGIN: 'Login',
  CHANGE_PASSWORD: 'Change Password',
  USER_PROFILE: 'User Profile',
  DRAWER: 'Home',
  MAIN: 'MAIN',
  HELP: 'Help',
  SETTINGS: 'Settings',
  FORGOT_PASSWORD: 'ForgotPassword',
};

export const InputTypes = {
  Text: 'text',
  Picker: 'picker',
  DropDown: 'dropdown',
  Radio: 'radio',
};

export const ImageTypes = {
  ProfilePicture: 'ProfilePicture',
  CoverPicture: 'CoverPicture',
  ItemImage: 'ItemImage',
};
