import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default class RulesScreen extends Component {
  static navigationOptions = {
    title: 'Rules',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Rules Screen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
