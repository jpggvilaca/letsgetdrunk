import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers';

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  game: reducer,
});

const Root = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(Root);

const store = createStore(
  appReducer,
  applyMiddleware(middleware)
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

/*
TODO:

Card component
Game component with all the cards
Game should have a start game button
Game should show the 'permanent' rules somewhere on the screen, open on a modal
Leaderboard component, open on a modal
Add more rules
Add permanent rules
Add explanation for the card sizes in the pre-game screen
Add disclaimer (moderation, dont drink and drive)

 */