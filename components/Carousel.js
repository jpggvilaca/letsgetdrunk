import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Button from 'react-native-button';
import Carousel from 'react-native-looped-carousel';
import CarouselSlide from './CarouselSlide';
import { carouselMessages } from '../Copy';

const { width, height } = Dimensions.get('window');

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
          {carouselMessages.map((message, index) => (
            <CarouselSlide
              size={this.state.size}
              message={message}
              styles={carouselStyles}
              slideCount={carouselMessages.length}
              index={index}
              handlePress={this.handlePress}
              key={index}
            />
          ))}
        </Carousel>
      </View>
    );
  }
}
