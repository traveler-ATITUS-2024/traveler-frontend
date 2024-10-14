import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../modules/login/view/login";
import Cadastro from "../modules/cadastro/view/cadastro";
import { Viagem } from "../modules/viagem/view/viagem";
import { ModalViagem } from "../modules/modal/view/modal";
import Profile from "../modules/profile/view/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export default function rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Viagem"
        component={Viagem}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ModalViagem"
        component={ModalViagem}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
