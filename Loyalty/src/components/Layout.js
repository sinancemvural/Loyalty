import React from "react";
import { View, StyleSheet,Image } from "react-native";


import Header from "./Header";
import Footer from "./Footer";
import colors from "../theme/colors";


export default function Layout({ children }) {
  return (
    <View style={{flex:1}}>

        <Header />
       
        <View style={styles.content}>{children}</View>

        <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor:colors.background
  },
});
