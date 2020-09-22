import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MapScreen from "../screens/MapScreen";
import StoresScreen from "../screens/StoresScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { primary, yellow, blue } from "../Config/Colors";
import { YellowBox } from "react-native";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: "white",
        activeTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="google-maps"
              size={34}
              color={primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="store"
        component={StoresScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="store" size={34} color={yellow} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="settings" size={34} color={blue} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
