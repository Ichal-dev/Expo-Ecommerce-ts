import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Singin,
  Home,
  Keranjang,
  User,
  Explore,
  Offer,
  Profile,
  DetailProduct,
} from "../organism";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLOR_BROWN } from "../utils/constans";
import { Feather } from "@expo/vector-icons";

const Auth = createNativeStackNavigator();
const Root = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Tab"
      screenOptions={{
        tabBarActiveTintColor: COLOR_BROWN,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          tabBarLabel: "Keranjang",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Offer"
        component={Offer}
        options={{
          tabBarLabel: "Offer",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-offer" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={User}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-cog" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const Authentication = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Sing-in" component={Singin} />
    </Auth.Navigator>
  );
};

const Router = () => {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="Auth" component={Authentication} />
      <Root.Screen name="Tab" component={Tab} />
      <Root.Screen name="Profile" component={Profile} />
      <Root.Screen name="DetailProduct" component={DetailProduct} />
    </Root.Navigator>
  );
};

export default Router;
