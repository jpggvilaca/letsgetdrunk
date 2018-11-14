import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { cardColors } from '../constants/Colors';

const levelMap = {
  1: cardColors[0],
  2: cardColors[1],
  3: cardColors[2],
  4: cardColors[3],
};

class Card extends Component {
  getStyles = () => {
    const { level } = this.props;

    return StyleSheet.flatten([
      styles.container,
      { backgroundColor: levelMap[level || 1] }
    ]);
  }

  render() {
    const { name, level } = this.props;

    return (
      <View style={this.getStyles()}>
        <Text style={styles.cardText}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 80,
    borderWidth: 1,
  },
  cardText: {
    color: 'white'
  },
});

export default Card;