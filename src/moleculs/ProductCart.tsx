import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { BoxContent } from "../atoms";
import {
  COLOR_NEUTRAL_DARK,
  COLOR_NEUTRAL_GREY,
  COLOR_PRIMARY_BLUE,
  COLOR_PRIMARY_RED,
} from "../utils/constans";

type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];

interface productInterface {
  name: string;
  image: ImageSourcePropType;
  size: string;
  price: number | string;
  description?: string;
}

const ProductCart = (props: productInterface) => {
  const { name, image, price } = props;
  return (
    <View style={{ marginRight: 8 }}>
      <BoxContent>
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 16,
            alignItems: "center",
          }}
        >
          <Image
            source={image}
            style={{ width: "100%", height: 109, borderRadius: 5 }}
          />
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={styles.titleStyle}>{name}</Text>
          <Text style={styles.priceStyle}>{price}</Text>
        </View>
        <View style={styles.diskonPrice}>
          <Text style={styles.priceDiskonStyle}>$534,33</Text>
          <Text style={styles.diskonOfferStyle}>24% Off</Text>
        </View>
      </BoxContent>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: COLOR_NEUTRAL_DARK,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "700",
    marginVertical: 8,
  },
  diskonPrice: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  priceStyle: {
    fontSize: 12,
    fontWeight: "700",
    color: COLOR_PRIMARY_BLUE,
    lineHeight: 21.6,
  },
  priceDiskonStyle: {
    color: COLOR_NEUTRAL_GREY,
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "400",
  },
  diskonOfferStyle: {
    color: COLOR_PRIMARY_RED,
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 15,
    marginLeft: 8,
  },
});

export default ProductCart;
