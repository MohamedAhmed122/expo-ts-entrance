import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { gray, lightGray } from "../Config/Colors";

interface SearchInputProps {
  changeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ changeText }) => {
  return (
    <View style={styles.container}>
      <EvilIcons
        style={{ paddingRight: 10 }}
        name="search"
        size={24}
        color={gray}
      />
      <TextInput
        onChangeText={changeText}
        style={styles.input}
        placeholder="Search For Store... "
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "90%",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    overflow: "hidden",
  },

  input: {
    color: "#424242",
  },
});

export default SearchInput;
