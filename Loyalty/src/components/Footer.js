import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SinanCemVural 2025 ©LoyalApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.textColor,
  },
});
