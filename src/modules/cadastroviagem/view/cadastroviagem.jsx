import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useCadastroNovaViagemController from "../controller/cadastroviagemController";

import marcacaomapa from "../../../../assets/marcacaomapa.png";
import calendarioida from "../../../../assets/calendarioida.png";
import calendariovolta from "../../../../assets/calendariovolta.png";
import logo from "../../../../assets/logo.png";
import flechaesquerda from "../../../../assets/flechaesquerda.png";

export default function CadastroNovaViagem() {
  const navigation = useNavigation();
  const { cidade } = useCadastroNovaViagemController();

  const [tituloViagem, setTituloViagem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [dataIda, setDataIda] = useState(null);
  const [dataVolta, setDataVolta] = useState(null);
  const [isIdaPickerVisible, setIdaPickerVisibility] = useState(false);
  const [isVoltaPickerVisible, setVoltaPickerVisibility] = useState(false);
  const [gastoPrevisto, setGastoPrevisto] = useState("R$ 0,00"); 

  // Função para manipular a data de ida
  const handleConfirmIda = (selectedDate) => {
    setIdaPickerVisibility(false);
    setDataIda(selectedDate);
  };

  // Função para manipular a data de volta
  const handleConfirmVolta = (selectedDate) => {
    setVoltaPickerVisibility(false);
    setDataVolta(selectedDate);
  };

  // Função para formatar o valor como moeda e manter o prefixo "R$"
  const formatCurrency = (value) => {
    // Remove qualquer caractere que não seja número
    let numericValue = value.replace(/\D/g, "");
    
    // Se o valor estiver vazio, atribuímos 0
    if (numericValue.length === 0) {
      numericValue = "0";
    }

    // Divide o valor por 100 para formar a casa decimal
    numericValue = (numericValue / 100).toFixed(2).replace(".", ",");

    // Adiciona os pontos de separação para milhares
    numericValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Retorna o valor formatado com "R$" no início
    return `R$ ${numericValue}`;
  };

  // Função de controle da mudança no valor
  const handleGastoChange = (value) => {
    // Atualiza o estado com o valor formatado
    setGastoPrevisto(formatCurrency(value));
  };

  const handleAdicionar = () => {
    navigation.navigate("cadastroviagem");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={flechaesquerda} style={[styles.voltarIcone, { tintColor: "#FFFF" }]} />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
        </View>

        {!isEditing ? (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.label}>
              {tituloViagem || "Título da viagem:"}
            </Text>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={styles.input}
            value={tituloViagem}
            placeholder="Digite o título da viagem"
            placeholderTextColor="#999"
            onChangeText={setTituloViagem}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        )}

        <View style={styles.linha} />

        <View style={styles.datas}>
          <TouchableOpacity onPress={() => setIdaPickerVisibility(true)} style={styles.dataContainer}>
            <Image source={calendarioida} style={styles.icone} />
            <Text style={styles.textoDatas}>
              {dataIda ? dataIda.toLocaleDateString("pt-BR") : "Data de ida"}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isIdaPickerVisible}
            mode="date"
            onConfirm={handleConfirmIda}
            onCancel={() => setIdaPickerVisibility(false)}
            locale="pt-BR"
            display="inline"
            themeVariant="dark"
            textColor="#FFFFFF"
          />

          <TouchableOpacity onPress={() => setVoltaPickerVisibility(true)} style={styles.dataContainer}>
            <Image source={calendariovolta} style={styles.icone} />
            <Text style={styles.textoDatas}>
              {dataVolta ? dataVolta.toLocaleDateString("pt-BR") : "Data de volta"}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isVoltaPickerVisible}
            mode="date"
            onConfirm={handleConfirmVolta}
            onCancel={() => setVoltaPickerVisibility(false)}
            locale="pt-BR"
            display="inline"
            themeVariant="dark"
            textColor="#FFFFFF"
          />

          <View style={styles.linha} />
        </View>

        <View style={styles.cidadeContainer}>
          <Image source={marcacaomapa} style={styles.icone} />
          <Text style={styles.cidadeTexto}>{cidade || "Selecionar cidade"}</Text>
        </View>

        <View style={styles.gastoContainer}>
          <Text style={styles.gastoLabel}>Gasto previsto:</Text>
          <TextInput
            style={styles.inputGasto}
            value={gastoPrevisto}
            onChangeText={handleGastoChange}
            keyboardType="numeric"
            placeholderTextColor="#FFFF"
          />
        </View>

        <TouchableOpacity style={styles.botaoAdicionar} onPress={handleAdicionar}>
          <Text style={styles.textoBotao}>+ Adicionar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00050D",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginRight: 125,
    marginTop: 50,
  },
  logo: {
    width: 98,
    height: 83,
  },
  voltarIcone: {
    width: 30,
    height: 30,
  },
  label: {
    fontSize: 20,
    color: "#999",
    marginTop: 40,
    marginBottom: 10,
  },
  input: {
    color: "#999",
    fontSize: 18,
    width: "100%",
    backgroundColor: "transparent",
  },
  datas: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    width: "100%",
    marginTop: 5,
  },
  icone: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  textoDatas: {
    color: "#FFFFFF",
    fontSize: 15,
    flex: 1,
  },
  cidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  cidadeTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    marginLeft: 10,
  },
  gastoContainer: {
    marginTop: 40,
  },
  gastoLabel: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  inputGasto: {
    color: "#999",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    borderBottomColor: "#FFF",
  },
  botaoAdicionar: {
    backgroundColor: "#0E6EFF",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 180,
    marginLeft: 160,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
