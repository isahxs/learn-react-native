import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function App(){
  const larguraAnimada = useRef(new Animated.Value(150)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Largura animada vai de 150 até 300
    /*  Animated.timing(larguraAnimada, {
        toValue: 300,
        duracion: 2000,
        useNativeDriver: false
      }).start();
    */

    // Altura animada que vai de 50 até 300
    Animated.timing(alturaAnimada, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <View style = {styles.container}>
      <Animated.View
      style={{
        width: larguraAnimada,
        height: alturaAnimada,
        backgroundColor: '#483D8B',
        justifyContent: 'center',
        borderRadius: 12
      }}
      >
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#ffffff'}}>
          Animated effect
        </Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})