import { StyleSheet } from 'react-native';
import { color } from '../../estilos';

export default StyleSheet.create({
  informacao: {
  },
  nome: {
    color: color.black,
    fontSize: 14,
    fontFamily: "ArvoRegular"
  },
  dados: {
    marginTop: 10,
    paddingLeft: 30,
    color: color.black,
    fontSize: 16,
    fontFamily: "ArvoBold"
  },
  data: {
    color: color.black,
    fontSize: 10,
    fontFamily: "ArvoBold",
    textAlign: "left",
  },
  titulo: {
    color: color.black,
    fontSize: 16,
    fontFamily: "ArvoBold",
    textAlign: "center",
    marginTop: 20
  }
});
