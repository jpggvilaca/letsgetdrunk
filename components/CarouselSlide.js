import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Dimensions } from 'react-native';
import Button from 'react-native-button';

const buttonContainerStyles = {
  backgroundColor: '#333',
  borderRadius: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
};

const buttonStyles = {
  color: '#fff',
  fontSize: 24,
};

class CarouselSlide extends Component {
  static propTypes = {
    size: PropTypes.object,
    message: PropTypes.string,
    styles: PropTypes.object,
    slideCount: PropTypes.number,
    index: PropTypes.number,
    handlePress: PropTypes.func,
    key: PropTypes.number,
  }

  render() {
    const { size, styles, slideCount, index, message, handlePress } = this.props;
    const isLast = slideCount === index + 1;

    return (
      <View style={[size]}>
        <Text style={styles.text}>
          {message}
        </Text>
        {
          isLast
            ? <Button
                containerStyle={buttonContainerStyles}
                style={buttonStyles}
                onPress={handlePress}
              >
                Start the Game
              </Button>
            : null
        }
      </View>
    )
  }
}

export default CarouselSlide;
