import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "native-base";
import { Line } from "../../atoms";
import { Cart, CuponBox, Modal } from "../../moleculs";
import { COLOR_PRIMARY_BLUE } from "../../utils/constans";

interface propsCart {
  cartItem: [];
}

class Keranjang extends React.Component<propsCart> {
  constructor(props: propsCart) {
    super(props);
    this.state = {
      cartItem: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitleStyle}>Keranjang Belanja</Text>
        <Line />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 16 }}>
            <View style={{ paddingVertical: 8 }} />
            <CuponBox />
            <View style={{ paddingVertical: 16 }}>
              <Modal />
            </View>
          </View>
          <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <TouchableOpacity style={styles.chekOutstyle}>
              <Text style={{ color: "#FFF", fontWeight: "700" }}>
                Check Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
  },
  headerTitleStyle: {
    marginLeft: 16,
    fontSize: 17,
    fontWeight: "700",
  },
  chekOutstyle: {
    backgroundColor: COLOR_PRIMARY_BLUE,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 5,
  },
});

export default Keranjang;
