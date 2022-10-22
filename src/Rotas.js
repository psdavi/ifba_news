import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Titulo from "./telas/Titulo";
import Conteudo from "./telas/Conteudo";

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Titulo" component={Titulo} />
            <Stack.Screen name="Conteudo" component={Conteudo} />
        </Stack.Navigator>
    </NavigationContainer>
}
