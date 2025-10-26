import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'

import colors from '../theme/colors'
import fonts from '../theme/fonts'


export default function Header (){
  return (
    <View style={styles.container}>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '15%',
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  text: {
    color: colors.textColor,
  },
});
