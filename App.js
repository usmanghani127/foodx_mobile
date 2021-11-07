/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ComposeProviders from './src/context';
import Initializing from './src/views/Initializing';
import LoginScreen from './src/views/login';
import {RouteKeys} from './src/common/Constants';
import Settings from './src/views/settings';
import Drawer from './src/navigation/drawer';
import ChangePassword from './src/views/changePassword';
import ForgotPassword from './src/views/forgotPassword';

const App: () => Node = () => {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={styles.background}>
      <ComposeProviders>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
            }}>
            <Stack.Screen
              name={RouteKeys.INITIAL}
              component={Initializing}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={RouteKeys.LOGIN}
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={RouteKeys.SETTINGS}
              component={Settings}
              options={{title: 'Settings'}}
            />
            <Stack.Screen
              name={RouteKeys.DRAWER}
              component={Drawer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={RouteKeys.CHANGE_PASSWORD}
              component={ChangePassword}
              options={{title: 'Change Password'}}
            />
            <Stack.Screen
              name={RouteKeys.FORGOT_PASSWORD}
              component={ForgotPassword}
              options={{title: 'Forgot Password'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ComposeProviders>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
