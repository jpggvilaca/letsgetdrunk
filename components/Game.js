import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Card from './Card';

import { rules } from '../constants/Copy';

class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Game</Text>
        {rules.map((rule) => (
          <Card name={rule.key} level={rule.level} />
        ))}
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