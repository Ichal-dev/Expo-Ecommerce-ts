import React from "react";
import { View, StyleSheet } from "react-native";

import { COLOR_NEUTRAL_LIGHT } from "../utils/constans";

type BoxContentProps = {
  children: JSX.Element | JSX.Element[];
  style?: any;
};

const BoxContent = ({ children, style }: BoxContentProps) => {
  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLOR_NEUTRAL_LIGHT,
    borderRadius: 5,
  },
});

export default BoxContent;
