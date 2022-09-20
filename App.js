import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function formula(a, b) {
  return Math.pow(a + b, 2);
}

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Calculator" component={calculator} />
        <stack.Screen name="About" component={AboutUs} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Calculator");
        }}
      >
        <Text style={styles.text}>Calculator</Text>
      </TouchableOpacity>
    </View>
  );
}

function calculator() {
  const [astr, set_astr] = useState();

  const [bstr, set_bstr] = useState();

  const [answer, set_answer] = useState();

  function calculate() {
    let aint = parseInt(astr);

    let bint = parseInt(bstr);

    let total = formula(aint, bint);

    set_answer(total);
  }

  return (
    <View style={styles.container}>
      <Text>(a+b)^2: {answer} </Text>

      <TextInput
        placeholder="enter a value"
        onChangeText={set_astr}
        backgroundColor="lightyellow"
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "lightyellow",
          textAlign: "center",
          margin: "20px",
        }}
      />

      <TextInput
        placeholder="enter a value"
        onChangeText={set_bstr}
        backgroundColor="lightyellow"
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "lightyellow",
          textAlign: "center",
          marginBottom: "20px",
        }}
      />

      <Button title="Calculate" onPress={calculate} />

      <StatusBar style="auto" />
    </View>
  );
}

function AboutUs({ navigation }) {
  let your_name = "Develeper to perfection";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This app was completed by {"\n"}
        {your_name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",
  },
});
