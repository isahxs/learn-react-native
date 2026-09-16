import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Button, Modal } from 'react-native';

class EntrarModal extends Component{
  render(){
    return(
    <View style={{backgroundColor: 'floralwhite', width: '100%', height: 350, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{padding: 10, color: 'black', fontSize: 28, textAlign: 'center'}}>Boas-vindas</Text>
        <Button title="Sair" onPress={this.props.fecharmodal} />
    </View>
    )
   }
}

export default EntrarModal;