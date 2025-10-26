import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import CustomButton from "../../components/CustomButton";

export default function HomeScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <CustomButton name="Çıkış Yap" func={logout} />
    </View>
  );
}