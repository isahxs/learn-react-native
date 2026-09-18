import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function App() {

  const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);
  const buttonRef = useRef(null);

  function handleClick(){
    buttonRef.current.bounce()
  }

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
      
      <ButtonAnimated style={styles.button} 
      //animation="fadeInUp"
       animation="lightSpeedIn"
       ref={buttonRef}
       onPress={handleClick}
      >
      <Text style={{color: "#ffffff"}}>Animar</Text>
      </ButtonAnimated>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
  },
  button: {
    width: '70%',
    height: 40,
    backgroundColor: '#DDA0DD',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 20,
    alignItems: 'center'
  }
})