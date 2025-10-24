import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 MyApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
