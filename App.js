import React from "react";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Rotas from "./src/Rotas";
import TelaPadrao from "./src/componentes/telaPadrao"
import TitleBar from "./src/componentes/TitleBar";
import { useFonts, Arvo_400Regular, Arvo_700Bold_Italic } from '@expo-google-fonts/arvo'
import { View } from "react-native";


export default function App() {

  const [fonte] = useFonts({
    "ArvoBold": Arvo_700Bold_Italic,
    "ArvoRegular": Arvo_400Regular,
  })

  if (!fonte) {
    return <View />
  }

  return <TelaPadrao>
    <TitleBar />
    <Rotas />
  </TelaPadrao>;

}
