import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation();

    function navegaSobre(){
        navigation.navigate('Sobre', { nome: 'Justin', email: 'bieberpurpose@gmail.com' })
    }

    function navegaDetalhes(){
        navigation.navigate('Detalhes')
    }

    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Vá para sobre" onPress={navegaSobre} />
            <Button title="Vá para a page Detalhes" onPress={navegaDetalhes} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})