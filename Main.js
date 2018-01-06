import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { mainScreenData } from './selectors';

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

const mapStateToProps = state => ({
  data: mainScreenData(state)
});

export class Main extends Component {
  render() {
    const { finishedIntro, playersPicked } = this.props.data;

    return (
      <View style={styles.container}>
        {!finishedIntro ? <IntroCarousel gameWillStart={finishedIntro}/> : null}
        {finishedIntro ? <PickPlayers gameWillStart={playersPicked} /> : null}
        {playersPicked ? <Game /> : null}
      </View>
    );
  }
}

export default Main = connect(mapStateToProps, null)(Main);
