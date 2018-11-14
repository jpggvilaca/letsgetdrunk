//ROTATING TABLE WITH COLORS, LIKE A DARTBOARD
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Game</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Game;