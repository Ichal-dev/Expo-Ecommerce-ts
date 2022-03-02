import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { BoxContent } from "../atoms";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { COLOR_PRIMARY_BLUE, COLOR_PRIMARY_RED } from "../utils/constans";
import SumItem from "./SumItem";

type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];

interface Props {
  name: string;
  image: ImageSourcePropType;
  price: number;
}

const Cart = (props: Props) => {
  const { name, image, price } = props;
  return (
    <>
      <BoxContent>
        <View style={styles.sectionStyle}>
          <Image
            source={image}
            style={{ height: 72, width: 72, borderRadius: 5 }}
          />
          <View style={styles.sectonCont}>
            <Text numberOfLines={2} style={styles.titleStyle}>
              {name}
            </Text>
            <Text style={styles.priceStyle}>{price}</Text>
          </View>
          <View style={styles.sectIcon}>
            <AntDesign
              name="heart"
              size={20}
              color="black"
              style={{ color: COLOR_PRIMARY_RED }}
            />
            <Feather
              name="trash"
              size={20}
              color="black"
              style={{ paddingHorizontal: 12 }}
            />
          </View>
        </View>
        <SumItem />
      </BoxContent>
      <View style={{ marginTop: 16 }} />
    </>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    padding: 16,
  },
  sectonCont: {
    paddingHorizontal: 14,
    justifyContent: "space-between",
    flexShrink: 1,
    width: 150,
  },
  sectIcon: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    top: 10,
  },
  titleStyle: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  priceStyle: {
    color: COLOR_PRIMARY_BLUE,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
export default Cart;
