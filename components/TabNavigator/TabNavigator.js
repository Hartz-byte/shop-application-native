import { StyleSheet, View } from "react-native";
import React from "react";
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import Category from "../screens/Category";
import More from "../screens/More";
import Detail from "../screens/Detail";
import Cart from "../screens/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    borderRadius: 30,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    // bottom tab navigation
    <Tab.Navigator screenOptions={screenOptions}>
      {/* home */}
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <AntDesign
                  name="home"
                  size={24}
                  color={focused ? "#E0B420" : "black"}
                  style={styles.icon}
                />
              </View>
            );
          },
        }}
      />

      {/* categories */}
      <Tab.Screen
        name="Categories"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <MaterialIcons
                  name="category"
                  size={24}
                  color={focused ? "#E0B420" : "black"}
                  style={styles.icon}
                />
              </View>
            );
          },
        }}
      />

      {/* favorite */}
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <MaterialIcons
                  name="favorite-border"
                  size={24}
                  color={focused ? "#E0B420" : "black"}
                  style={styles.icon}
                />
              </View>
            );
          },
        }}
      />

      {/* more */}
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.btn}>
                <Feather
                  name="more-vertical"
                  size={24}
                  color={focused ? "#E0B420" : "black"}
                  style={styles.icon}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    marginLeft: 10,
  },
});
