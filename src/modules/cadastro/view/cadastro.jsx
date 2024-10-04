import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import logo from "../../../../assets/logo.png";
import { cadastroControllerImpl } from "../di/di";

export default function Cadastro() {
  const controller = cadastroControllerImpl();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        {/* <Text style={styles.titulo}>{controller.state}</Text> */}
        <Text style={styles.titulo}>traveler</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          placeholderTextColor="white"
          value={controller.username}
          onChangeText={(text) => controller.setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          value={controller.email}
          onChangeText={(text) => controller.setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          placeholderTextColor="white"
          value={controller.password}
          onChangeText={(text) => controller.setPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar nova senha"
          placeholderTextColor="white"
          value={controller.confirmPassword}
          onChangeText={(text) => controller.setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.botaoCadastrar}
        onPress={controller.handleRegister}
      >
        <Text style={styles.textobotao}>Cadastrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.acessoLogin}
        onPress={() => controller.navigation.navigate("Login")}
      >
        <Text style={styles.login}>Já possuo uma conta</Text>
        <View style={styles.linha}></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00050D",
    justifyContent: "center",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 98,
    height: 83,
    marginBottom: 24,
  },
  titulo: {
    fontSize: 24,
    letterSpacing: 6.2,
    fontFamily: "Inter",
    color: "#FFF",
  },
  form: {
    paddingHorizontal: 50,
  },
  input: {
    fontSize: 18,
    color: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    marginBottom: 30,
    padding: 10,
  },
  botaoCadastrar: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 50,
    marginBottom: 30,
    marginTop: 50,
  },
  textobotao: {
    color: "#FFF",
    fontSize: 18,
  },
  acessoLogin: {
    alignItems: "center",
  },
  login: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 5,
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    width: "80%",
    marginTop: 5,
    width: 150,
  },
});
