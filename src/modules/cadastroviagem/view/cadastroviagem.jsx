import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import useCadastroNovaViagemController from "../controller/cadastroviagemController";
import { useNavigation } from "@react-navigation/native";

import marcacaomapa from "../../../../assets/marcacaomapa.png";
import calendarioida from "../../../../assets/calendarioida.png";
import calendariovolta from "../../../../assets/calendariovolta.png";
import logo from "../../../../assets/logo.png";
import flechaesquerda from "../../../../assets/flechaesquerda.png";

export default function CadastroNovaViagem() {
  const {
    cidade,
    selecionarCidade,
    tituloViagem,
    setTituloViagem,
    isEditing,
    setIsEditing,
    dataIda,
    dataVolta,
    isCalendarVisible,
    selectedCalendar,
    gastoPrevisto,
    handleConfirmIda,
    handleConfirmVolta,
    formatarData,
    toggleCalendar,
    dismissKeyboardAndCalendar,
    handleGastoChange,
    handleAdicionar,
  } = useCadastroNovaViagemController();

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboardAndCalendar}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={flechaesquerda}
                style={[styles.voltarIcone, { tintColor: "#FFFF" }]}
              />
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
            <TouchableOpacity
              onPress={() => toggleCalendar("ida")}
              style={styles.dataContainer}
            >
              <Image source={calendarioida} style={styles.icone} />
              <Text style={styles.textoDatas}>
                {dataIda ? formatarData(dataIda) : "Data de ida"}
              </Text>
            </TouchableOpacity>

            {isCalendarVisible && selectedCalendar === "ida" && (
              <Calendar
                style={styles.calendar}
                headerStyle={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: "#E8E8E8",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
                theme={{
                  textMonthFontSize: 18,
                  monthTextColor: "#E8E8E8",
                  todayTextColor: "#F06543",
                  selectedDayBackgroundColor: "#F06543",
                  selectedDayTextColor: "#E8E8E8",
                }}
                onDayPress={(day) => handleConfirmIda(new Date(day.dateString))}
              />
            )}

            <TouchableOpacity
              onPress={() => toggleCalendar("volta")}
              style={styles.dataContainer}
            >
              <Image source={calendariovolta} style={styles.icone} />
              <Text style={styles.textoDatas}>
                {dataVolta ? formatarData(dataVolta) : "Data de volta"}
              </Text>
            </TouchableOpacity>

            {isCalendarVisible && selectedCalendar === "volta" && (
              <Calendar
                style={styles.calendar}
                headerStyle={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: "#E8E8E8",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
                theme={{
                  textMonthFontSize: 18,
                  monthTextColor: "#E8E8E8",
                  todayTextColor: "#F06543",
                  selectedDayBackgroundColor: "#F06543",
                  selectedDayTextColor: "#E8E8E8",
                }}
                onDayPress={(day) =>
                  handleConfirmVolta(new Date(day.dateString))
                }
              />
            )}

            <View style={styles.linha} />
          </View>

          <View style={styles.cidadeContainer}>
            <Image source={marcacaomapa} style={styles.icone} />
            <Text style={styles.cidadeTexto}>
              {cidade || "Selecionar cidade"}
            </Text>
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

          <TouchableOpacity
            style={styles.botaoAdicionar}
            onPress={handleAdicionar}
          >
            <Text style={styles.textoBotao}>+ Adicionar</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00050D",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "space-between",
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
  calendar: {
    backgroundColor: "transparent",
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
    marginTop: 50,
  },
  gastoLabel: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  inputGasto: {
    color: "#999",
    fontSize: 30,
    fontWeight: "bold",
  },
  botaoAdicionar: {
    backgroundColor: "#0E6EFF",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 120,
    marginBottom: 40,
    marginLeft: 140,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
