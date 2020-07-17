import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'recat-navigation';
import {createBottomTabNavigator} from 'react-native-tabs';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
export default class App  extends React.Component() {
  render(){
  return (
    <AppContainer/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  SignUpLogin : {screens:SignUpLoginScreen}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
