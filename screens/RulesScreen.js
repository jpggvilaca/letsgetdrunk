import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList } from 'react-native';

import { rules } from '../constants/Copy';

export default class RulesScreen extends Component {
  static navigationOptions = {
    title: 'Rules',
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.key}:</Text>
        <Text>{item.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={rules}
          renderItem={this.renderItem}
        />
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
  name: {
    color: 'blue',
    fontSize: 16,
  },
  item: {
    marginBottom: 10,
  },
});
