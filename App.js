import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView style={style.background}>
      <View style={style.containerLogo}>
        <Image source={require("./assets/logo.png")} />
      </View>

      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </View>

      <View>
        <TextInput
          style={style.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={style.btnSubmit}>
          <Text style={style.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegister}>
          <Text style={style.register}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919"
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50
  },
  input: {
    backgroundColor: "#FFF",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: "#35AAFF",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7
  },
  submitText: {
    color: "#FFF",
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10
  },
  register: {
    color: "#FFF"
  }
});
