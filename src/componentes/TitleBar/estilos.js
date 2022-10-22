import { StyleSheet } from 'react-native';
import { color } from '../../estilos';

export default StyleSheet.create({
  conteudo: {
    backgroundColor: color.green,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 8,
  },
  descricao: {
    fontSize: 24,
    color: color.white,
    fontFamily: "ArvoBold",
  },
});