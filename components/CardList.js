import React, { Component, createRef } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight, Animated, Easing } from 'react-native';

import Card from './Card';

import { rules } from '../constants/Copy';

class CardList extends Component {
  state = {
    positionY: new Animated.Value(0),
  }

  handlePressIn = () => {
    const { positionY } = this.state;

    Animated.timing(positionY, {
      toValue: -700,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
        positionY.setValue(700);

        Animated.timing(positionY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        }).start()
      });
  }

  renderCardItem = ({ item }) => (
    <TouchableHighlight onPress={this.handlePressIn}>
      <Card name={item.key} level={item.level} />
    </TouchableHighlight>
  )

  render() {
    let { positionY } = this.state;
    const transformStyle = { transform: [{ translateY: positionY }] };
    const outOfBondsStyle = { transform: [{ translateY: -700 }] }

    return (
      <Animated.View style={{...styles.container, ...transformStyle}}>
        <FlatList
          data={rules}
          renderItem={this.renderCardItem}
        />
      </Animated.View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

export default CardList;