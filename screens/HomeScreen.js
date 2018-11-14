import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

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
        <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
    height: 60,
    width: 200,
  },
  buttonText: {
    fontSize: 24,
  }
});
