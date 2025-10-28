import { View, Text,StyleSheet,Image,Button} from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';


import DrawerNavigator from '../navigation/DrawerNavigator'

import colors from '../theme/colors'
import fonts from '../theme/fonts'
import { AuthContext } from '../context/AuthContext'


export default function Header (){

  const navigation=useNavigation()
  const{user}=useContext(AuthContext)
  return (
    <View style={styles.container}>
      {user &&
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <View style={{flex:1}}>
          <Button title="☰ Menü" onPress={() => navigation.openDrawer()} color={colors.textColor}/>
        </View>
        <View style={{flex:1}}>

        </View>
        <View style={{flex:1}}>
          <Image source={require('../../assets/image/logo.png')} style={{width:70,height:70,borderRadius:75}}/>
        </View>
      </View> 
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '15%',
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems:'flex-start',
  },
  text: {
    color: colors.textColor,
  },
});
