import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BoxContent } from "../atoms";

type FlashSaleProps = {
  children?: JSX.Element | JSX.Element[];
};

const FlashSale = ({ children }: FlashSaleProps) => {
  return (
    <>
      <View style={styles.boxTimerStyle}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  boxTimerStyle: {
    height: 41,
    width: 41,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
});

export default FlashSale;
