import React from 'react';
import { View, Text, StyleSheet } from "react-native";

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
          <Text>{item.item.qty}</Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ccc",
    justifyContent: "flex-start",

  },
  row: {
    textAlign:"left",
    width:"25%",
  },
});

export default Item;
