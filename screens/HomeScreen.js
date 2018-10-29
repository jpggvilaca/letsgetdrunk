import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  handleButtonPress = () => {
    this.props.navigation.navigate('PickPlayers');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Stupid drinking game just for fun
        </Text>
        <Button title="Start a new game" onPress={this.handleButtonPress} />
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
