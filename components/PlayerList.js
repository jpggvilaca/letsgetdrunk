import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, View } from 'react-native';

const styles = {
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
    return <Text style={styles.item}>{item.key}</Text>;
  }

  render() {
    const { players } = this.props;

    return (
      <View>
        <FlatList data={players} renderItem={this.renderItem} />
      </View>
    );
  }
}
