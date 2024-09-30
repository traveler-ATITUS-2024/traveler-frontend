import React from "react";
import { View, StyleSheet, Animated, TouchableOpacity, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import flecha from "./../../assets/flechaesquerda.png"

export function ModalViagem({ fechar }) {
  return (
    <View style={styles.container}>
      {/* Botão invisível para fechar o modal */}
      <TouchableOpacity style={styles.botaoinvisivel} onPress={fechar}></TouchableOpacity>

      <View style={styles.conteudopesquisa}>
        {/* Linha */}  
        <Animated.View style={[styles.linha]} />

        {/* Botão de voltar com ícone */}
        <TouchableOpacity onPress={fechar} style={styles.fundobotao}>
          <Image 
          source={flecha} 
          style={[styles.fundoicone, {tintColor: '#ffffff'}]} 
          />
        </TouchableOpacity>

        {/* GooglePlacesAutocomplete */}
        <GooglePlacesAutocomplete
        
          placeholder="Qual o seu destino?"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDgRNpVHxeabrd7SvG6WgALeXiSi5-JdAs",
            language: "pt-BR",
          }}
          fetchDetails={true}
          styles={{
            textInput: styles.textopesquisa,
            listView: styles.suggestionList, 
          }}
          textInputProps={{
            placeholderTextColor: "rgba(255,255,255,0.65)",
            style: styles.textopesquisa,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00050D",
    flex: 1,
  },

  botaoinvisivel: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },

  conteudopesquisa: {
    width: "100%",
    height: "85%",
    backgroundColor: "#071222",
    marginTop: 100,
    alignItems: "center",
    borderRadius: 40,
    zIndex: 2,
  },

  linha: {
    width: "15%",
    height: 3,
    backgroundColor: "rgba(255,255,255,0.50)",
    marginTop: 7,
  },

  textopesquisa: {
    width: 320,  
    backgroundColor: "#00050D",
    marginTop: 28,
    height: 51,
    borderRadius: 40,
    paddingLeft: 65, 
    color: "rgba(255,255,255,0.65)",
    alignSelf: "center",  
  },

  suggestionList: {
    backgroundColor: "#071222",
    borderRadius: 20,
    width: 320,  
    alignSelf: "center",  
  },
  
  fundobotao: {
    position: 'absolute',
    left: 45,
    top: 30 ,
  },

  fundoicone: {
    width: 25,
    height: 25,

  },

});