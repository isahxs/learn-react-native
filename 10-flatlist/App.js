import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Pessoa from './src/Pessoas/index';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    feed: [
      {id: "1", nome: "Justin", idade: 36, email: 'swagyukon@gmail.com'},
      {id: "2", nome: "Rihanna", idade: 38, email: 'antiwork@gmail.com'},
      {id: "3", nome: "Madonna", idade: 68, email: 'louisemdna@gmail.com'},
      {id: "4", nome: "Lady Gaga", idade: 40, email: 'stefaniabracadabra@gmail.com'},
      {id: "5", nome: "Kendrick", idade: 39, email: 'kendrickdamn@gmail.com'},
      {id: "6", nome: "Eminem", idade: 53, email: 'marshallbm2@gmail.com'},
    ]
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Pessoa data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;