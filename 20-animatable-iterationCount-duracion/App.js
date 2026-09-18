import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text
      style={styles.title}
      // animation="bounce"
      // iteractionCount={3}
      // iterationCount={Infinity}
      animation="tada"
      duration={5000}
      >
        My App
      </Animatable.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 25,
    color: 'red'
  }
})