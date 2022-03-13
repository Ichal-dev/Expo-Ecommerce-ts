import React from "react";
import { View, Text, StyleSheet } from "react-native";

type LineProps = {
  children?: JSX.Element | JSX.Element[];
  style: any;
};

const Line = ({ children, style }: LineProps) => {
  return <View style={style}>{children}</View>;
};

export default Line;
