import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";

import { COLOR_BROWN } from "../../utils/constans";

interface SinginProps {
  navigation: any;
}

class Singin extends React.Component<SinginProps> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ padding: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            lineHeight: 24,
            fontWeight: "700",
            marginTop: 50,
          }}
        >
          Login
        </Text>
        <View style={styles.containerForm}>
          <Input
            variant={"underlined"}
            mx={3}
            placeholder="Email"
            style={styles.inputStyle}
          />
          <Input
            variant={"underlined"}
            mx={3}
            placeholder="Password"
            style={styles.inputStyle}
          />
          <Button
            style={styles.btnStyle}
            onPress={() => {
              this.props.navigation.navigate("Tab");
            }}
          >
            Login
          </Button>
        </View>
        <Text style={{ textAlign: "center" }}>OR</Text>
        <View style={styles.wrapperSing}>
          <AntDesign
            name="google"
            size={26}
            color="black"
            style={{ marginRight: 10 }}
          />
          <AntDesign name="apple1" size={26} color="black" />
        </View>
        <View style={styles.hrefText}>
          <Text>Forgot Password?</Text>
          <Text>Don't have a account! Register</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerForm: {
    display: "flex",
    alignItems: "center",
  },
  inputStyle: {
    margin: 16,
    width: "80%",
  },
  wrapperSing: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnStyle: {
    width: "80%",
    height: "20%",
    backgroundColor: COLOR_BROWN,
    borderRadius: 20,
  },
  hrefText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Singin;
