import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){

    let nome = 'Justin';

    return(
      <View>
        <Text>Olá, mundo! </Text>
        <Text style={{ color: '#00b7ffff', fontSize: 25, margin: 15, textAlign: 'center' }}>Olá, novamente </Text>

        <Text style={{ fontSize: 40, textAlign: 'center' }}>{nome}</Text>

      <Bieber largura={500} altura={200} nomeando="Justin Bieber"/>
      </View>
    );
  }
}

export default App;

class Bieber extends Component {
  render(){
  let image = 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/09/whatsapp-image-2022-09-04-at-181908.jpeg';


  return(
    <View> 
    <Image 
      source={{ uri: image }}
      style={{ width: this.props.largura, height: this.props.altura, alignItems: 'center' }}
    />

    <Text>{this.props.nomeando}</Text>
    </View>
  );
}
}
