import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default class GameScreen extends Component {
  static navigationOptions = {
    title: 'Game',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Game Screen</Text>
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
