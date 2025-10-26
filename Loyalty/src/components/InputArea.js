import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

import colors from '../theme/colors'
import fonts from '../theme/fonts'

export default function InputArea(props) {
  return (
    <TextInput placeholder={props.placeholder} value={props.v} onChangeText={props.changeText} style={styles.inputArea} secureTextEntry={props.secure} />
  )
}

const styles = StyleSheet.create({
    inputArea:{
        width:'85%',
        height:50,
        backgroundColor:colors.primary,
        borderRadius:15,
        margin:5,
        color:colors.textColor,
      }
})