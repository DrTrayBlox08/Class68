
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import TransactionScreen from "./Screens/TransactionScreen";
import SearchScreen from "./Screens/SearchScreen";

export default class App extends React.Component{
  render(){
    return<AppContainer/>;
  }
}

const TabNavigator=createBottomTabNavigator({
  Transaction: {screen:TransactionScreen},
  Search: {screen:SearchScreen}
});

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
