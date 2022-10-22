import { StyleSheet } from 'react-native';
import { color } from '../../../estilos';

export default StyleSheet.create({
  informacao: {
    padding: 24
  },
  nome: {
    color: color.green,
    fontSize: 16,
    fontFamily: "ArvoRegular"
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: color.gray,
  },
});
