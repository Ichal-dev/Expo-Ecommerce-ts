import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  COLOR_NEUTRAL_GREY,
  COLOR_NEUTRAL_LIGHT,
  COLOR_PRIMARY_BLUE,
} from "../utils/constans";
import { SimpleLineIcons } from "@expo/vector-icons";
import { BoxContent } from "../atoms";

const SearchItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BoxContent>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 15,
          }}
        >
          <FontAwesome name="search" size={16} color={COLOR_PRIMARY_BLUE} />
          <TextInput style={styles.inputStyle}></TextInput>
        </View>
      </BoxContent>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Feather name="heart" size={24} color={COLOR_NEUTRAL_GREY} 
          style={{ marginHorizontal: 16, }} />
        <SimpleLineIcons
          name="bell"
          size={24}
          color={COLOR_NEUTRAL_GREY}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  inputStyle: {
    marginLeft: 8,
    width: 207,
  },
});

export default SearchItem;
