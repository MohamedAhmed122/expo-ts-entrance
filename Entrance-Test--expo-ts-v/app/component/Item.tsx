import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gray, primary } from "../Config/Colors";
import { Store } from "../typings";

interface ItemProps {
  store: Store;
  setAddStore: (stores: Array<Store>) => void;
  addStore: Array<Store>;
}

const Item: React.FC<ItemProps> = ({ store, setAddStore, addStore }) => {
  const [colorIcon, setColorIcon] = useState(false);
  const { imageUri, name, place, subscription } = store;

  const handleAddStore = (storeToAdd: Store) => {
    const ExistingStore = addStore.find((store) => store.id === storeToAdd.id);
    if (ExistingStore) {
      handleRemoveStore(ExistingStore.id);
      setColorIcon(false);
    } else {
      setAddStore([...addStore, storeToAdd]);
      setColorIcon(true);
    }
  };

  const handleRemoveStore = (storeId: number) =>
    setAddStore(addStore.filter((store) => store.id !== storeId));

  return (
    <View style={{ flexDirection: "row" }}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.containerMiddle}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subscribe}>{subscription}</Text>
      </View>
      <View style={styles.containerLeft}>
        <Text style={styles.timeText}>{place}</Text>
        <AntDesign
          name="staro"
          size={24}
          color={"black"}
          onPress={() => handleAddStore(store)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 65,
    width: 65,
    margin: 10,
    borderRadius: 15,
  },
  containerMiddle: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: gray,
    fontSize: 18,
    fontWeight: "bold",
  },
  subscribe: {
    color: primary,
  },
  containerLeft: {
    flexDirection: "row",
    marginRight: 15,
    alignItems: "center",
  },
  timeText: {
    color: gray,
    marginRight: 10,
  },
});

export default Item;
