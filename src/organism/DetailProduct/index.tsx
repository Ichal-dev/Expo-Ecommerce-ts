import React from "react";
import {
  ScrollView,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "@react-navigation/native";
import {
  Feather,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import {
  COLOR_PRIMARY_RED,
  COLOR_PRIMARY_BLUE,
  COLOR_NEUTRAL_GREY,
  COLOR_NEUTRAL_DARK,
} from "../../utils/constans";

import { Button, Card } from "native-base";

import { URL_API_UPLOADS } from "@env";
import { data } from "../../dummyData/product";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { State } from "../../state";
import { connect } from "react-redux";

const WIDTH = Dimensions.get("window").width;

type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];

interface Props {
  route: Readonly<{ children?: React.ReactNode }>;
  Image: ImageSourcePropType;
}

class DetailProduct extends React.Component<Props> {
  private API_IMAGE = URL_API_UPLOADS;
  constructor(props: Props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addProduct = (id: any) => {
    return id;
  };

  render() {
    const { item } = this.props.route.params;

    return (
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.container}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={32}
            color={COLOR_NEUTRAL_GREY}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 10,
              width: WIDTH - 80,
            }}
          >
            <TextInput style={styles.inputStyle}></TextInput>
            <FontAwesome name="search" size={20} color={COLOR_NEUTRAL_GREY} />
          </View>
          <Feather
            name="more-vertical"
            size={24}
            color={COLOR_NEUTRAL_GREY}
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <ScrollView>
          <View>
            <Image source={item.image} style={{ height: 238, width: 375 }} />
          </View>
          <View style={styles.wrapperTitle}>
            <Text
              style={{
                fontSize: 20,
                color: COLOR_NEUTRAL_DARK,
                fontWeight: "700",
              }}
            >
              {}
            </Text>
            <AntDesign
              name="heart"
              size={20}
              color="red"
              style={{ position: "absolute", right: 4, marginRight: 14 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 16,
              marginBottom: 8,
            }}
          >
            <FontAwesome name="star" size={16} color="orange" />
            <FontAwesome
              name="star"
              size={16}
              color="orange"
              style={{ marginLeft: 4 }}
            />
            <FontAwesome
              name="star"
              size={16}
              color="orange"
              style={{ marginLeft: 4 }}
            />
            <FontAwesome
              name="star"
              size={16}
              color="orange"
              style={{ marginLeft: 4 }}
            />

            <FontAwesome
              name="star"
              size={16}
              color="orange"
              style={{ marginLeft: 4 }}
            />
          </View>
          <Text style={styles.textPriceStyle}>{item.price}</Text>
          <View>
            <Text
              style={{
                margin: 16,
                color: COLOR_NEUTRAL_DARK,
                fontWeight: "700",
              }}
            >
              Select Size
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View style={styles.sizeStyle}>
                <Text style={{ color: COLOR_NEUTRAL_DARK }}>M</Text>
              </View>
              <View style={styles.sizeStyle}>
                <Text style={{ color: COLOR_NEUTRAL_DARK }}>L</Text>
              </View>
              <View style={styles.sizeStyle}>
                <Text style={{ color: COLOR_NEUTRAL_DARK }}>XL</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              margin: 16,
              color: COLOR_NEUTRAL_DARK,
              fontWeight: "700",
            }}
          >
            Description:
          </Text>
          <Text style={{ marginLeft: 16, color: COLOR_NEUTRAL_GREY }}>
            {item.description}
          </Text>
          <Button
            size="lg"
            style={{
              margin: 16,
              width: 324,
              alignSelf: "center",
            }}
            onPress={() => {
              this.addProduct(item.id);
              this.props.navigation.navigate("Keranjang");
            }}
          >
            Tambah Ke Keranjang
          </Button>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    marginLeft: 8,
    width: WIDTH / 2 + 60,
  },
  wrapperTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  textPriceStyle: {
    color: COLOR_PRIMARY_BLUE,
    fontSize: 20,
    marginLeft: 16,
    fontWeight: "bold",
  },
  sizeStyle: {
    height: 48,
    width: 48,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLOR_NEUTRAL_GREY,
  },
});

export default DetailProduct;
