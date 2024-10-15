import { useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useCadastroNovaViagemController() {
  const [cidade, setCidade] = useState("");
  
  const navigation = useNavigation(); 

  // Função para buscar a cidade armazenada no AsyncStorage
  const obterCidade = async () => {
    try {
      const cidadeArmazenada = await AsyncStorage.getItem("@nomeCidade");
      if (cidadeArmazenada) {
        setCidade(cidadeArmazenada);
        navigation.navigate("cadastroviagem"); 
      }
    } catch (error) {
      console.log("Erro ao obter a cidade armazenada:", error);
    }
  };

  useEffect(() => {
    obterCidade(); 
  }, []);

  const selecionarCidade = (cidadeSelecionada) => {
    setCidade(cidadeSelecionada);
    navigation.navigate("CadastroViagem"); 
  };

  return { cidade, selecionarCidade };
}
