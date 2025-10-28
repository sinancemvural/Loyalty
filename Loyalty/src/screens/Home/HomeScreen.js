import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import CustomButton from "../../components/CustomButton";
import Layout from "../../components/Layout";

export default function HomeScreen() {
  const { logout } = useContext(AuthContext);

  return (
   <Layout></Layout>
  );
}