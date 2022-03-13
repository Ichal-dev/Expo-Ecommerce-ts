import React from "react";
import { Dimensions, TextInput, StyleSheet, View, Image } from "react-native";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import {
  COLOR_PRIMARY_BLUE,
  COLOR_NEUTRAL_GREY,
  COLOR_NEUTRAL_LIGHT,
} from "../utils/constans";
import { BoxContent } from "../atoms";

const WIDTH = Dimensions.get("window").width;

type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];

interface Props {
  route: Readonly<{ children?: React.ReactNode }>;
  Image: ImageSourcePropType;
}

const SearchItem = () => {
  return (
    <>
      <BoxContent
        style={{
          borderWidth: 1,
          flexDirection: "row",
          height: 46,
          alignItems: "center",
          borderColor: COLOR_NEUTRAL_LIGHT,
          borderRadius: 5,
        }}
      >
        <Feather
          name="search"
          size={16}
          color={COLOR_PRIMARY_BLUE}
          style={{ marginLeft: 16 }}
        />
        <TextInput
          placeholder="apa yang kamu cari!!"
          style={styles.inputStyle}
        ></TextInput>
      </BoxContent>
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginLeft: 8,
    marginRight: 15,
    width: 236,
  },
});

export default SearchItem;
