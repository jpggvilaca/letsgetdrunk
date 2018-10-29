import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation'

import PlayerList from './PlayerList';
import Notification from './Notification';

import { addPlayer } from '../actions';

const mapStateToProps = ({ nav, game }) => ({
  playersPicked: game.playersPicked,
  players: game.players,
  nav
});

const mapDispatchToProps = dispatch => ({
  addPlayer: player => dispatch(addPlayer(player)),
  goToGame: () => dispatch(NavigationActions.navigate({ routeName: 'Game' }))
});

class PickPlayers extends Component {
  state = {
    inputText: '',
    message: ''
  }

  handleOnChange = text => {
    this.setState({
      inputText: text,
      message: ''
    });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { players, addPlayer } = this.props;

    this.setState({
      inputText: '',
      message: `Player ${inputText} added!`
    }, () => addPlayer({name: inputText, drinkCount: 0}));
  }

  handleStartGame = () => {
    const { goToGame } = this.props;

    goToGame();
  }

  render() {
    const hasSucessMessage = this.state.message.length;
    const { message, inputText } = this.state;
    const { players } = this.props;

    const canStartGame = players.length > 1;

    return (
      <KeyboardAwareScrollView 
        style={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <View>
          {hasSucessMessage ? <Notification text={message} /> : null}

          <Text style={styles.text}>Add players</Text>

          <TextInput
            style={styles.input}
            onChangeText={this.handleOnChange}
            value={inputText}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSave}
            underlayColor='#99d9f4'
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>

          <PlayerList players={players} />

          {canStartGame && 
            <TouchableHighlight
              style={styles.button}
              onPress={this.handleStartGame}
              underlayColor='#99d9f4'
            >
              <Text style={styles.buttonText}>Start game</Text>
            </TouchableHighlight>
          }
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickPlayers);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 16,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    height: 44,
    backgroundColor: '#48bbec',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 40,
    justifyContent: 'center'
  }
});