import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, View } from 'react-native';

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'center'
  },
  item: {
    color: 'red'
  }
};

export default class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.array
  };

  static defaultProps = {
    players: []
  };

  renderItem({ item }) {
    return <Text style={styles.item}>{item.name}</Text>;
  }

  render() {
    const { players } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text>Players</Text>
        <FlatList
          data={players}
          renderItem={this.renderItem}
          keyExtractor={({ name }) => name}
        />
      </View>
    );
  }
}
