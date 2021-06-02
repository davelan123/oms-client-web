import React from 'react';
import { StyleSheet, View, StatusBar, Text } from "react-native";
import MyStepper from './components/MyStepper';

function Container() {
    return (
      <div>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <MyStepper />
          <StatusBar style="auto" />
        </View>
      </div>
    );
}

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});