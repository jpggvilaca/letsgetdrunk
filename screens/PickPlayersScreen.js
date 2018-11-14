import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PickPlayers from '../components/PickPlayers';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Pick players',
  };

  render() {
    return (
      <View style={styles.container}>
        <PickPlayers />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    paddingTop: 50
  }
});
