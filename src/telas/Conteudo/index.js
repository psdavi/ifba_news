import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Button } from "react-native";
import estilos from "./estilos";
import { useNavigation } from "@react-navigation/native";


export default function Conteudo({ route }) {

    const navigation = useNavigation();

    const { titulo, conteudo, data } = route.params

    return <View style={estilos.informacao}>
                <Button
                title="Voltar"
                onPress={() => { navigation.goBack() }}
                />
                <ScrollView style={{flex:0}}>
            <Text style={estilos.titulo}><Text>{titulo}{"\n"}</Text></Text>


        <Text style={estilos.data}> Data de postagem: <Text style={estilos.data}>{data}</Text></Text>



<Text style={estilos.dados}><Text style={estilos.nome}>{conteudo}</Text></Text>

    <Text>
    {"\n"}
    {"\n"}
    </Text>


</ScrollView>
    </View>
}