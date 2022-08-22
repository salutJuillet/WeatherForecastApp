import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet} from 'react-native'

const Weather = () => {
  return (
    <ScrollView style={st.container}>
        <View style={st.todayContainer}>
            <Text style={st.greetings}>Good Morning</Text>
            <Text style={st.date}>8월 22일 월요일</Text>
            <Text style={st.date}>김포시 장기동</Text>
            <View style={st.todayImageContainer}>
                <Image source={require('../assets/images/w_d_rainy.png')}
                       style={st.todayImage}
                       resizeMode="contain" />
            </View>
            <View style={st.row}>
                <Text style={st.temperature}>28</Text>
                <Text style={st.degree}>&deg;</Text>
            </View>
            
            <Text style={st.highLow}>30&deg; / 24&deg;</Text>
            <Text style={st.highLow}>feels like 30&deg;</Text>
            <Text style={st.description}>비가 많이 와요.</Text>
            
            <View style={st.seperator} />
            <View style={[st.row, {flex:1, justifyContent:'space-evenly'}]}>
                <View style={st.details}>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                           style={st.detailsImage}
                           resizeMode="contain" />
                    <Text>자외선</Text>
                </View>
                <View style={st.details}>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                           style={st.detailsImage}
                           resizeMode="contain" />
                    <Text>습도</Text>
                </View>
                <View style={st.details}>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                           style={st.detailsImage}
                           resizeMode="contain" />
                    <Text>바람</Text>
                </View>
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
        justifyContent:'center',
        paddingTop:20
    },
    greetings:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:50
    },
    date:{
        color:'#ffffff',
        opacity:0.7,
        fontSize:18
    },
    todayImageContainer:{
        width:250,
        height:200,
        marginTop:20
    },
    todayImage:{
        width:'100%',
        height:'100%'
    },
    temperature:{
        color:'#ffffff', //그라데이션 넣자
        fontWeight:'bold',
        fontSize:100
    },
    degree:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:40
    },
    highLow:{
        color:'#ffffff',
        opacity:0.7,
        fontSize:18
    },
    description:{
        color:'#ffffff', //그라데이션 넣자
        fontWeight:'bold',
        fontSize:25,
        marginTop:15
    },
    seperator:{
        width:'85%',
        borderTopWidth:1,
        borderTopColor:'#999999',
        marginVertical:15
    },
    details:{
        width:90,
        height:90
    },
    detailsImage:{
        width:'100%',
        height:'100%'
    },

    row:{
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center'
    }
})

export default Weather