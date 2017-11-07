import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import IntroCarousel from './components/Carousel';
import PickPlayers from './components/PickPlayers';
import Game from './components/Game';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  state = {
    startGame: true, // revert to false, this is for debug only
    playersPicked: false,
  };

  hasFinishedIntro = () => {
    this.setState({ startGame: true });
  }

  hasSelectedPlayers = () => {
    this.setState({ playersPicked: true });
  }

  render() {
    const { startGame, playersPicked } = this.state;

    return (
      <View style={styles.container}>
        {!startGame ? <IntroCarousel gameWillStart={this.hasFinishedIntro}/> : null}
        {startGame ? <PickPlayers gameWillStart={this.hasSelectedPlayers} /> : null}
        {playersPicked ? <Game /> : null}
      </View>
    );
  }
}
