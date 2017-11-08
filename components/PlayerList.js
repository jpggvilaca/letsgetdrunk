import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, View } from 'react-native';

const styles = {
  wrapper: {
    display: 'flex',
    height: 300,
    width: '100%',
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
    return <Text style={styles.item} key={item.name}>{item.name}</Text>;
  }

  render() {
    const { players } = this.props;

    return (
      <View style={styles.wrapper}>
        <FlatList data={players} renderItem={this.renderItem} />
      </View>
    );
  }
}
