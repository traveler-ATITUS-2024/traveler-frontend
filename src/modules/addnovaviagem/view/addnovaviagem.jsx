import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import logo from "../../../../assets/logo.png";
import fundomenu from "../../../../assets/fundomenu.png";
import pessoa from "../../../../assets/pessoa.png";
import casinha from "../../../../assets/casinha.png";
import profile from "../../profile/view/profile.jsx"; // Supondo que esta seja a tela de perfil
import { ModalViagem } from "../../modal/view/modal.jsx";

const Tab = createBottomTabNavigator(); // Configuração do Tab Navigator

export default function App() {
  const [mostraModal, setMostraModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.titulo}>traveler</Text>

      <View>
        <Image source={fundomenu} style={styles.imagemfundomenu} />
      </View>

      <Text style={styles.texto}>Qual seu próximo destino?</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setMostraModal(true)}
      >
        <Text style={styles.textobotao}>+ Adicionar nova viagem</Text>
      </TouchableOpacity>

      <View style={styles.linha}></View>

      <NavigationContainer>
        {/* Definindo as abas para navegação */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
              let tintColor = focused ? "#0E6EFF" : "#fff";

              if (route.name === "Home") {
                iconName = casinha;
              } else if (route.name === "Profile") {
                iconName = pessoa;
              }

              return (
                <Image source={iconName} style={[styles.icon, { tintColor }]} />
              );
            },
            tabBarStyle: { backgroundColor: "#0A1A2F" }, // Fundo do menu
            tabBarShowLabel: false, // Esconder rótulo de texto
          })}
        >
          <Tab.Screen name="Home" component={AddNovaViagem} />
          <Tab.Screen name="Profile" component={profile} />
        </Tab.Navigator>
      </NavigationContainer>

      <Modal visible={mostraModal} animationType="fade" transparent={true}>
        <ModalViagem fechar={() => setMostraModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00050D",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 98,
    height: 83,
    marginBottom: 24,
  },
  titulo: {
    fontSize: 24,
    letterSpacing: 6.2,
    fontFamily: "Inter", // Aplicar a fonte Inter
    color: "#FFF",
  },
  imagemfundomenu: {
    width: 300,
    height: 300,
  },
  texto: {
    color: "rgba(255,255,255,0.50)",
    fontSize: 22,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#0E6EFF",
    width: 315,
    height: 51,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textobotao: {
    color: "#FFF",
    fontSize: 18,
  },
  linha: {
    width: "90%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.50)",
    marginTop: 130,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
