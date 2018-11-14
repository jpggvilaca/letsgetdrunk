import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, SectionList } from 'react-native';

import { instructions, rules, permanentRules } from '../constants/Copy';

export default class RulesScreen extends Component {
  static navigationOptions = {
    title: 'Rules',
  };

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.item} key={index}>
        {item.key.length ? <Text style={styles.name}>{item.key}:</Text> : null}
        <Text>{item.description}</Text>
      </View>
    );
  }

  renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.header}>{title}</Text>
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={[
            {title: 'How the game works', data: instructions},
            {title: 'Main rules', data: rules},
            {title: 'Permanent rules', data: permanentRules},
          ]}
          keyExtractor={(item, index) => item + index}
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
    paddingBottom: 60,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  item: {
    left: 10,
  },
});
