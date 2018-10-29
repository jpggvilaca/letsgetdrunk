import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'green',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center'
  }
});

const Notification = ({ text }) => (
  <Text style={styles.text}>{text}</Text>
);

export default Notification;