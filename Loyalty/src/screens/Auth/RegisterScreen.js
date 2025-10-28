import { StyleSheet, Text, View ,Image} from 'react-native'
import React,{useContext} from 'react'
import Layout from '../../components/Layout'
import CustomButton from '../../components/CustomButton'
import InputArea from '../../components/InputArea'
import { AuthContext } from "../../context/AuthContext";

export default function RegisterScreen({navigation}) {
    const[email,setEmail]=React.useState('')
    const[password,setPassword]=React.useState('')
    const[rePassword,setRePassword]=React.useState('')
    const[adSoyad,setAdSoyad]=React.useState('');

    const { login } = useContext(AuthContext);

    const handleRegister = () => {
        if (!rePassword || !email || !password || !adSoyad) {
          alert("Lütfen tüm alanları doldurun");
          return;
        }
        if(rePassword != password)
        {
            alert("Şifreler eşleşmiyor");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Lütfen geçerli bir e-posta adresi girin");
          return;
        }
      
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        // Açıklama:
        // (?=.*[a-z]) -> en az bir küçük harf
        // (?=.*[A-Z]) -> en az bir büyük harf
        // (?=.*\d)   -> en az bir rakam
        // .{6,}      -> toplam en az 6 karakter
      
        if (!passwordRegex.test(password)) {
          alert(
            "Şifre en az 6 karakter olmalı ve en az 1 büyük harf, 1 küçük harf ve 1 rakam içermelidir."
          );
          return;
        }
        // Sahte register -> hemen login yap
        login(email, password); // RootNavigator AppNavigator'ı açacak
      };

  return (
    <Layout >
        <View style={{flex:4,alignItems:'center'}}>
            <Image source={require('../../../assets/image/logo.png')} style={{width:'30%',height:'30%',borderRadius:75}}/> 
            <InputArea placeholder={"Ad Soyad"} v={adSoyad} changeText={setAdSoyad} secure={false} />
            <InputArea placeholder={"Email"} v={email} changeText={setEmail} secure={false} />
            <InputArea placeholder={"Şifre(En az 6 Karakter)"} v={password} changeText={setPassword} secure={true} />
            <InputArea placeholder={"Şifre Tekrar"} v={rePassword} changeText={setRePassword} secure={true} />      
        </View>
        <View style={{alignItems:'center',flex:1}}>
            <CustomButton name={"Üye Ol"} func={handleRegister} />
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({})