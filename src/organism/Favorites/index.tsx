import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import {
  COLOR_PRIMARY_BLUE,
  COLOR_NEUTRAL_DARK,
  COLOR_NEUTRAL_GREY,
  COLOR_NEUTRAL_LIGHT,
} from "../../utils/constans";

import { Line, BoxContent } from "../../atoms";
import { Cart, ProductCart } from "../../moleculs";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

import { data } from "../../dummyData/product";
type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];

interface Props {
  route: Readonly<{ children?: React.ReactNode }>;
  Image: ImageSourcePropType;
}

class Favorites extends React.Component {
  render() {
    const data1 = data;
    console.log(data1);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.wrapper}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLOR_NEUTRAL_GREY}
            style={{ marginLeft: 16 }}
          />
          <Text
            style={{
              fontWeight: "700",
              marginLeft: 8,
              color: COLOR_NEUTRAL_DARK,
            }}
          >
            Favorite Product
          </Text>
        </View>
        <Line
          style={{
            marginTop: 16,
            borderWidth: 1,
            borderColor: COLOR_NEUTRAL_LIGHT,
          }}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ alignSelf: "center" }}
          data={data1}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductCart
              name={item.name}
              price={item.price}
              size={item.size}
              nameIcon="trash"
              sizeIcon={24}
              styleIcon={{ marginLeft: 8 }}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Favorites;
