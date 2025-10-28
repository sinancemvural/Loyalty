import React, { useState,useContext,useEffect } from "react";
import { View, StyleSheet,Image ,KeyboardAvoidingView,Platform, TouchableWithoutFeedback,Keyboard} from "react-native";


import Header from "./Header";
import Footer from "./Footer";
import colors from "../theme/colors";




export default function Layout({ children }) {

  const[keybordVisible,setKeyboardVisible]=useState(false);



  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);


  return (
    <KeyboardAvoidingView behavior={Platform.OS==='ios' ? 'padding' : 'height'} style={{flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View style={{flex:1}}>

            <Header /> 
          
            <View style={styles.content}>{children}</View>

            {!keybordVisible && <Footer />}

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
