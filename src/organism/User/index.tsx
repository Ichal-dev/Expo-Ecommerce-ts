import React from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { Line } from "../../atoms";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLOR_PRIMARY_BLUE } from "../../utils/constans";

interface UserProps {
  navigation: any;
}
class User extends React.Component<UserProps> {
  render() {
    return (
      <SafeAreaView style={style.container}>
        <Text style={{ paddingHorizontal: 16 }}>Account</Text>
        <Line />
        <TouchableOpacity
          style={style.wrapperContent}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <MaterialCommunityIcons
            name="account"
            size={24}
            color={COLOR_PRIMARY_BLUE}
          />
          <Text style={{ marginLeft: 12 }}>Profile</Text>
        </TouchableOpacity>
        <View style={style.wrapperContent}>
          <Feather name="shopping-bag" size={24} color={COLOR_PRIMARY_BLUE} />
          <Text style={{ marginLeft: 12 }}>Order</Text>
        </View>
        <View style={style.wrapperContent}>
          <Ionicons
            name="location-outline"
            size={24}
            color={COLOR_PRIMARY_BLUE}
          />
          <Text style={{ marginLeft: 12 }}>Address</Text>
        </View>
        <View style={style.wrapperContent}>
          <AntDesign name="creditcard" size={24} color={COLOR_PRIMARY_BLUE} />
          <Text style={{ marginLeft: 12 }}>Payment</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingVertical: 40,
  },
  wrapperContent: {
    flexDirection: "row",
    padding: 16,
  },
});

export default User;
