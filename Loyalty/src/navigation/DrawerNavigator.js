import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer'

import HomeScreen from '../screens/Home/HomeScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import SettingsScreen from '../screens/Settings/SettingsScreen'


const Drawer=createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home" screenOptions={{headerShown:false}}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Profile' component={ProfileScreen} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})