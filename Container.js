import React from 'react';
import { StyleSheet, View } from "react-native";
import MyStepper from "./components/MyStepper";
import Contacts from "./pages/Contacts";
import DeliveryChoose from "./pages/DeliveryChoose";
import PaymentChoose from "./pages/PaymentChoose";
import SummaryInfo from "./pages/SummaryInfo";
import MainButton from "./components/MainButton";
import { useSelector } from "react-redux";


function Container() {
    const step = useSelector((state) => state.stepVault.step);
    return (
      <div>
        <View style={styles.container}>
          <MyStepper />
             {step === 0 ? (
            <Contacts /> 
          ) : step === 1 ? (
            <DeliveryChoose />
          ) : step === 2 ? (
            <PaymentChoose />
          ) : step === 3 ? (
            <SummaryInfo />
          ) : null }
          <MainButton />
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