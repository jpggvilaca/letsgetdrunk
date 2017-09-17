import React, { Component } from 'react';
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
  render() {
    const { size, styles, slideCount, index, message, handlePress } = this.props;
    const isLast = slideCount === index + 1;

    return (
      <View style={[size]}>
        <Text style={styles.text}>
          {
            message
          }
        </Text>
        {
          isLast
            ? <Button
                containerStyle={buttonContainerStyles}
                style={buttonStyles}
                onPress={handlePress}>
                Start the Game
              </Button>
            : null
        }
      </View>
    )
  }
}

export default CarouselSlide;
