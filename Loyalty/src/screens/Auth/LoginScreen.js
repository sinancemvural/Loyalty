import React,{ useState, useContext } from "react";
import { View,Text ,StyleSheet, TextInput,Image} from "react-native";


import Layout from "../../components/Layout";
import colors from "../../theme/colors";
import CustomButton from "../../components/CustomButton";
import { AuthContext } from "../../context/AuthContext";
import InputArea from "../../components/InputArea";

export default function LoginScreen({navigation}) {

  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (userName && password) {
      login(userName, password);
      // user set edildiği için RootNavigator AppNavigator gösterecek
    } else {
      alert("Lütfen kullanıcı adı ve şifre girin");
    }
  };


  return (
    <Layout style={styles.container}>
      <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../../../assets/image/logo.png')} style={{width:250,height:250,borderRadius:75}}/>
        <InputArea placeholder={"KullanıcıAdı"} v={userName} changeText={setUserName} secure={false}/>
        <InputArea placeholder={"Şifre"} v={password} changeText={setPassword} secure={true} />
      </View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        <CustomButton name="Giriş Yap" func={handleLogin}/>
        <CustomButton name="Üye Ol" func={()=>navigation.navigate('Register')}/>
      </View>
    </Layout>
  );
}

const styles=StyleSheet.create({
  font:{
    color:colors.textColor
  },
  inputArea:{
    width:'85%',
    height:50,
    backgroundColor:colors.primary,
    borderRadius:15,
    margin:5,
    color:colors.textColor,
  }
});
