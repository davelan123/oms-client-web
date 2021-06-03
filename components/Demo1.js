import React from 'react'
import MyStepper from "./MyStepper";
import Contacts from "../pages/Contacts";
import DeliveryChoose from "../pages/DeliveryChoose";
import PaymentChoose from "../pages/PaymentChoose";
import SummaryInfo from "../pages/SummaryInfo";
import MainButton from "./MainButton";
import { StyleSheet, View } from "react-native";
import { useSelector } from 'react-redux';

function Demo1() {
    const step = useSelector(state=>state.stepVault.step);
    return (
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
        ) : null}
        <MainButton />
      </View>
    )
}

export default Demo1;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
