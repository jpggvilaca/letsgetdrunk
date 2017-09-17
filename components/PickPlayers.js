import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default class PickPlayers extends Component {
  state = {
    players: [],
    inputText: '',
    message: ''
  };

  handleOnChange = text => {
    this.setState({
      inputText: text,
      message: ''
    });
  }

  handleSave = () => {
    const { inputText } = this.state;

    this.setState({
      players: this.state.players.concat({ name: inputText, drinkCount: 0}),
      inputText: '',
      message: `Player ${inputText} added!`
    });
  }

  render() {
    const hasSucessMessage = this.state.message.length;

    return (
      <View>
        <Text>Pick Players</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleOnChange}
          value={this.state.inputText}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSave} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        {
          hasSucessMessage ? <Text>{this.state.message}</Text> : null
        }
      </View>
    );
  }
}
