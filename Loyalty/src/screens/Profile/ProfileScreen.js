import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout'
import CustomButton from '../../components/CustomButton'

export default function ProfileScreen({navigation}) {
  return (
    <Layout >
        <View>
            <Text>Üye Ol</Text>
            <CustomButton name="Geri" func={()=>navigation.navigate('Login')} />
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({})