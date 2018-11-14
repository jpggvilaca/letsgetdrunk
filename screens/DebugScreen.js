import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Game from '../components/Game';

export default class DebugScreen extends Component {
  static navigationOptions = {
    title: 'debug',
  };

  render() {
    return (
      <View style={styles.container}>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  }
});