import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Game from '../components/Game';

export default class GameScreen extends Component {
  static navigationOptions = {
    title: 'Game',
  }

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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 40
  }
});
