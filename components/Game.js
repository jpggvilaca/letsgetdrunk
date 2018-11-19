import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import CardList from './CardList';

class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList />
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