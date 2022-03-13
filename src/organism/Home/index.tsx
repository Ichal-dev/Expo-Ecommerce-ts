import React, { useCallback } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchItem, FlashSale, Category, ProductCart } from "../../moleculs";
import { BoxContent, Line } from "../../atoms";
import {
  COLOR_NEUTRAL_LIGHT,
  COLOR_PRIMARY_BLUE,
  COLOR_NEUTRAL_GREY,
} from "../../utils/constans";
import * as Font from "expo-font";
import { URL_API_UPLOADS } from "@env";
import { data } from "../../dummyData/product";
import { cartProductTypes } from "../../../services/data-Types";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { State } from "../../state";
import { connect } from "react-redux";

interface Props {
  LoadFonts?: () => void;
  fontsLoaded: boolean;
}

class Home extends React.Component<{}, Props> {
  private API_IMAGE = URL_API_UPLOADS;

  constructor(props: Props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async LoadFonts() {
    await Font.loadAsync({
      Poppins: require("../../asserts/fonts/Poppins-Bold.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.LoadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <SearchItem />
            <FontAwesome
              name="heart"
              color="red"
              size={16}
              onPress={() => this.props.navigation.navigate("Favorites")}
            />
            <Feather name="bell" size={16} />
          </View>

          <Line />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingVertical: 8 }} />
            <View style={{ paddingHorizontal: 16 }}>
              <ImageBackground
                source={require("../../asserts/img/banner.png")}
                style={{ width: "100%" }}
                resizeMode="cover"
              >
                <View style={styles.textFlashStyle}>
                  <Text style={styles.flasTitleStyle}>Super Flash Sale</Text>
                  <Text style={styles.flasTitleStyle}>50% Off</Text>
                </View>
                <View style={styles.wrapperTimerBox}>
                  <FlashSale>
                    <Text>08</Text>
                  </FlashSale>
                  <Text style={styles.semiColomStyle}>:</Text>
                  <FlashSale>
                    <Text>34</Text>
                  </FlashSale>
                  <Text style={styles.semiColomStyle}>:</Text>
                  <FlashSale>
                    <Text>52</Text>
                  </FlashSale>
                </View>
              </ImageBackground>
              <View style={styles.wrapperDot}>
                <Text
                  style={{
                    paddingHorizontal: 8,
                    fontSize: 24,
                    color: COLOR_NEUTRAL_LIGHT,
                  }}
                >
                  ●
                </Text>
                <Text style={{ fontSize: 24, color: COLOR_NEUTRAL_LIGHT }}>
                  ●
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 8,
                    fontSize: 24,
                    color: COLOR_PRIMARY_BLUE,
                  }}
                >
                  ●
                </Text>
                <Text style={{ fontSize: 24, color: COLOR_NEUTRAL_LIGHT }}>
                  ●
                </Text>
                <Text
                  style={{
                    paddingHorizontal: 8,
                    fontSize: 24,
                    color: COLOR_NEUTRAL_LIGHT,
                  }}
                >
                  ●
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <Text style={styles.secTitle}>Category</Text>
              <Text style={styles.secTitle}>More Category</Text>
            </View>
            <View style={styles.wrapperCategory}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Category />
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <Text style={styles.secTitle}>Flash Sale</Text>
              <Text style={styles.secTitle}>See More</Text>
            </View>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  {data.map((item: cartProductTypes) => {
                    return (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() =>
                          this.props.navigation.navigate({
                            name: "DetailProduct",
                            params: { item },
                          })
                        }
                      >
                        <ProductCart
                          name={item.name}
                          image={item.image}
                          price={item.price}
                          size={item.size}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <Text style={styles.secTitle}>Mega Sale</Text>
              <Text style={styles.secTitle}>See More</Text>
            </View>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  {data.map((item: cartProductTypes) => {
                    return (
                      <ProductCart
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        size={item.size}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: 16,
  },
  textFlashStyle: {
    marginTop: 32,
    marginLeft: 24,
  },
  flasTitleStyle: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Poppins",
  },
  wrapperTimerBox: {
    flexDirection: "row",
    paddingVertical: 29,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  semiColomStyle: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.5,
    marginHorizontal: 4,
    color: "#FFFFFF",
  },
  wrapperDot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  wrapperCategory: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  secTitle: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: COLOR_PRIMARY_BLUE,
  },
});
export default Home;
