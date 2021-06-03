import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Counter from "../components/Counter";

function Item(item) {
    console.log(item);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>{item.item.id}</Text>
        </View>
        <View style={styles.row}>
          <Text>{item.item.name}</Text>
        </View>
        <View style={styles.row}>
          <Text>${item.item.price}</Text>
        </View>
        <View style={styles.row}>
          <Counter item={item.item} />
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:100,
    marginRight:100,
    flexDirection: "row",
    justifyContent: "flex-start",

  },
  row: {
    textAlign:"left",
    width:"25%",
  },
});

export default Item;
