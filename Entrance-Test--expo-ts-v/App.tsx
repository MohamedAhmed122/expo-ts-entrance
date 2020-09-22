import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/Navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
