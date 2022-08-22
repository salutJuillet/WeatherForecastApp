import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet} from 'react-native'

const Weather = () => {
  return (
    <ScrollView style={st.container}>
        <View style={st.todayContainer}>
            <Text>Good Morning</Text>
            <Text>날짜</Text>
            <Text>이미지</Text>
            <Text>30도</Text>
            <Text>최고/최저</Text>
            <Text>체감온도</Text>
            <Text>비가 많이 와요.</Text>
            <Text>김포시 장기동</Text>
            <View style={{flexDirection:'row'}}>
                <Text>자외선</Text>
                <Text>습도</Text>
                <Text>바람</Text>
            </View>
        </View>

        <View>
            <Text>일주일 날씨</Text>
        </View>
    </ScrollView>
  )
}

const st = StyleSheet.create({
    container:{
        flex:1,
    },
    todayContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
})

export default Weather