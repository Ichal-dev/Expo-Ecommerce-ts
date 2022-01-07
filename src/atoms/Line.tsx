import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLOR_NEUTRAL_LIGHT } from "../utils/constans";

type LineProps = {
  children?: JSX.Element | JSX.Element[];
};

const Line = ({ children }: LineProps) => {
  return <View style={styles.lineBreak}>{children}</View>;
};

const styles = StyleSheet.create({
  lineBreak: {
    borderBottomWidth: 1,
    marginTop: 20,
    borderColor: COLOR_NEUTRAL_LIGHT,
  },
});

export default Line;
