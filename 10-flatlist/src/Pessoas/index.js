import React, { Component } from 'react';
import { View, Text, StyleSheet } from  'react-native';

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Id: {this.props.data.id}</Text>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    areaPessoa: {
    backgroundColor: 'mediumorchid',
    height: 220,
    marginTop: 18,
    marginBottom: 20,
    borderRadius: 8
  },
  textoPessoa: {
    color: "#ffffff",
    marginBottom: 5,
    marginTop: 4,
    fontSize: 25
  } 
})

export default Pessoa;