import React, { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Item from "./item";
import estilos from "../../estilos";
import { Conteudo } from "../../../noticias";


export default function Titulo(item) {

    const [nextPage, setNextPage] = useState(1);
    const [content, setContent] = useState([Conteudo]);
    const [loading, setLoading] = useState(false);

    const loadContent = () => {
        const contentLimited = Conteudo;
        const page = nextPage;
        const content = contentLimited.filter((item) => item.id <= (page))

        setContent(content)
        setNextPage(page + 1)
        setLoading(false)
    }

    return <>
        <FlatList
            data={content}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
            onEndReached={loadContent}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<Load Load={loading} />}
        />
    </>
}


function Load({ Load }) {
    return (
        <View style={estilos.espaco}>
            <ActivityIndicator size={25} color="#000000" />
        </View>
    )
}