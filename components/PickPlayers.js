import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import PlayerList from './PlayerList';

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
  static propTypes = {
    gameWillStart: PropTypes.func
  };

  static defaultProps = {
    gameWillStart: () => {}
  };

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
    const { inputText, players } = this.state;

    this.setState({
      players: players.concat({ name: inputText, drinkCount: 0}),
      inputText: '',
      message: `Player ${inputText} added!`
    });
  }

  render() {
    const hasSucessMessage = this.state.message.length;
    const { message, inputText, players } = this.state;
    const { gameWillStart } = this.props;

    const canStartGame = players.length > 1;

    return (
      <View>
        <Text>Pick Players</Text>

        <PlayerList players={players} />

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleOnChange}
          value={inputText}
        />

        <TouchableHighlight style={styles.button} onPress={this.handleSave} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>

        {
          canStartGame &&
          <TouchableHighlight style={styles.button} onPress={this.gameWillStart} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Start Game!</Text>
          </TouchableHighlight>
        }

        {hasSucessMessage ? <Text>{message}</Text> : null}
      </View>
    );
  }
}
