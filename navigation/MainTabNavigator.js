import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import PickPlayersScreen from '../screens/PickPlayersScreen';
import GameScreen from '../screens/GameScreen';
import RulesScreen from '../screens/RulesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DebugScreen from '../screens/DebugScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  PickPlayers: PickPlayersScreen,
  Game: GameScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'New game',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const RulesStack = createStackNavigator({
  Rules: RulesScreen,
});

RulesStack.navigationOptions = {
  tabBarLabel: 'Rules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const DebugginStack = createStackNavigator({
  Debug: DebugScreen,
});

DebugginStack.navigationOptions = {
  tabBarLabel: 'Debug',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createMaterialTopTabNavigator({
  HomeStack,
  RulesStack,
  SettingsStack,
  DebugginStack,
}, { tabBarPosition: 'bottom' });
