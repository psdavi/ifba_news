import React from "react";

import { View, Text, Image, StyleSheet } from 'react-native';
import estilos from "./estilos";


export default function TitleBar() {

    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>IFBA News</Text>
        </View>

        <View style={estilos.total}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/62598536?s=280&v=4',
        }}
      />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });