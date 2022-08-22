import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TopStatusBar = () => {

  const {top} = useSafeAreaInsets();

  return (
    <>
        <View style={[st.statusbar, {height: top}]} />
        <StatusBar backgroundColor="skyblue" barStyle="light-content" />
    </>
  )
}

const st = StyleSheet.create({
    statusbar:{
        backgroundColor:'#ffffff',
    }
})

export default TopStatusBar