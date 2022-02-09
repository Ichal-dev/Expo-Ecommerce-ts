import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchItem, FlashSale, Category, ProductCart } from "../../moleculs";
import { BoxContent, Line } from "../../atoms";
import { COLOR_NEUTRAL_LIGHT, COLOR_PRIMARY_BLUE } from "../../utils/constans";
import * as Font from 'expo-font';


interface HomeProps {
  LoadFonts : () => void
}
class Home extends React.Component<HomeProps> {

  state = {
    fontsLoaded: false,
  }

  async LoadFonts() {
    await Font.loadAsync({
      Poppins: require("../../asserts/fonts/Poppins-Bold.ttf")
    })
    this.setState({fontsLoaded: true})
  }

  componentDidMount() {
    this.LoadFonts();
  }
  
  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView style={styles.container}>
            <SearchItem />
              <Line />
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingVertical: 8 }} />
          <View style={{ paddingHorizontal: 16 }}>
            <BoxContent>
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
            </BoxContent>
            <View style={styles.wrapperDot}>
              <Text style={{ paddingHorizontal: 8, fontSize: 24, color: COLOR_NEUTRAL_LIGHT }}>●</Text>
              <Text style={{ fontSize: 24, color: COLOR_NEUTRAL_LIGHT }}>●</Text>
              <Text style={{ paddingHorizontal: 8, fontSize: 24, color: COLOR_PRIMARY_BLUE }}>●</Text>
              <Text style={{ fontSize: 24, color: COLOR_NEUTRAL_LIGHT }}>●</Text>
              <Text style={{ paddingHorizontal: 8, fontSize: 24, color: COLOR_NEUTRAL_LIGHT}}>●</Text>
            </View>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20}}>
              <Text style={styles.secTitle}>Category</Text>
            <Text style={styles.secTitle}>More Category</Text>
          </View>
            <View style={styles.wrapperCategory} >
              <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <Category />
              </ScrollView>
            </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20}}>
            <Text style={styles.secTitle}>Flash Sale</Text>
            <Text style={styles.secTitle}>See More</Text>
          </View>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  </View>
              </ScrollView>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20}}>
              <Text style={styles.secTitle}>Mega Sale</Text>
              <Text style={styles.secTitle}>See More</Text>
            </View>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row" }}>
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
                  <ProductCart />
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
    fontFamily: "Poppins"
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
    padding: 20
  },
  secTitle: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: COLOR_PRIMARY_BLUE
  }
});

export default Home;
