import React from "react";
import { StyleSheet, View } from "react-native";
import { gray } from "../Config/Colors";

function AppSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: gray,
  },
});

export default AppSeparator;
