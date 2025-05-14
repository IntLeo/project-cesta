import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';

const DetalheCesta = () => {
  const handleComprar = () => {
    Alert.alert('Compra a caminho!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloTopo}>Detalhe da cesta</Text>

      <Image
          source={require('./assets/topo-1.png')}
        style={styles.imagemCesta}
        resizeMode="cover"
      />

      <Text style={styles.tituloCesta}>Cesta de Verduras</Text>

      <View style={styles.CestaContainer}>
        <Image
          source={require('./assets/logo-1.png')}
          style={styles.logo}
        />
        <Text style={styles.nome}>Jenny Jack Farm</Text>
      </View>

      <Text style={styles.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
      </Text>

      <Text style={styles.preco}>R$ 40,00</Text>

      <TouchableOpacity style={styles.botao} onPress={handleComprar}>
        <Text style={styles.textoBotao}>Comprar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  tituloTopo: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center', 
    marginVertical: 10,
  },
  imagemCesta: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 15,
  },
  tituloCesta: {
    fontSize: 27,
    fontWeight: 'semibold',
    alignSelf: 'center', 
    marginBottom: 10,
  },
  CestaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 8,
  },
  nome: {
    fontSize: 16,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'left', // alinhamento do texto à esquerda
    marginVertical: 10,
    color: '#555',
  },
  preco: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 10,
  },
  botao: {
    alignSelf: 'center', 
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetalheCesta;
