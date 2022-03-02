import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Line } from "../../atoms";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { COLOR_NEUTRAL_GREY, COLOR_PRIMARY_BLUE } from "../../utils/constans";

const Profile = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.secHeader}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={style.secTitle}>Profile</Text>
      </View>
      <Line />
      <View style={{ padding: 16 }}>
        <View style={style.secProfile}>
          <Avatar bg="green.500" size="lg">
            Profile
          </Avatar>
          <View style={{ paddingHorizontal: 16, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Faisal Taliki
            </Text>
            <Text style={{ paddingVertical: 4 }}>@Ichal08</Text>
          </View>
        </View>
        <View style={{ paddingVertical: 12 }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <MaterialCommunityIcons
              name="gender-female"
              size={24}
              color={COLOR_PRIMARY_BLUE}
            />
            <Text style={{ marginLeft: 16 }}>Gender</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.textStyle}>Male</Text>
            <AntDesign name="right" size={24} color={COLOR_NEUTRAL_GREY} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <AntDesign name="mail" size={24} color={COLOR_PRIMARY_BLUE} />
            <Text style={{ marginLeft: 16 }}>Email</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.textStyle}>faisaltalikiicloud@gmail.com</Text>
            <AntDesign name="right" size={24} color={COLOR_NEUTRAL_GREY} />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Feather name="smartphone" size={24} color={COLOR_PRIMARY_BLUE} />
            <Text style={{ marginLeft: 16 }}>Phone Number</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.textStyle}>082290667778</Text>
            <AntDesign name="right" size={24} color={COLOR_NEUTRAL_GREY} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  secHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 28,
    alignItems: "center",
  },
  secTitle: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "700",
  },
  secProfile: {
    flexDirection: "row",
  },
  textStyle: {
    color: COLOR_NEUTRAL_GREY,
  },
});

export default Profile;
