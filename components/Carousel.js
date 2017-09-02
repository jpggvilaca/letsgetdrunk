import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Button from 'react-native-button';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');
const screenContent = [
  'So you want to get drunk eh?',
  'Well you came to the right place!',
  'Let\'s do this. Everyone, pick a color!'
];

const carouselStyles = {
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
  },
};

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

export default class IntroCarousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height }
    };
  }

  onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  handlePress = (e) => {
    const { gameWillStart } = this.props;

    gameWillStart && gameWillStart();
  }

  render() {
    return (
      <View onLayout={this.onLayoutDidChange} style={this.state.size}>
        <Carousel
          delay={2000}
          autoplay={false}
          style={this.state.size}
          pageStyle={carouselStyles.wrapper}
        >
          <View style={[this.state.size]}>
            <Text style={carouselStyles.text}>
              {screenContent[0]}
            </Text>
          </View>
          <View style={[this.state.size]}>
            <Text style={carouselStyles.text}>
              {screenContent[1]}
            </Text>
          </View>
          <View style={[this.state.size]}>
            <Text style={carouselStyles.text}>
              {screenContent[2]}
            </Text>
            <Button
              containerStyle={buttonContainerStyles}
              style={buttonStyles}
              onPress={this.handlePress}>
              Start the Game
            </Button>
          </View>
        </Carousel>
      </View>
    );
  }
}
