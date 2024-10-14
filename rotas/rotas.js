import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../src/modules/login/view/login";
import Cadastro from "../src/modules/cadastro/view/cadastro";
import AddNovaViagem from "../src/modules/addnovaviagem/view/addnovaviagem";
import { ModalViagem } from "../src/modules/modal/view/modal";
import Profile from "../src/modules/profile/view/profile";

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
        name="AddNovaViagem"
        component={AddNovaViagem}
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
