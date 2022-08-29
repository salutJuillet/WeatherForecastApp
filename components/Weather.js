import React, {useRef, useEffect} from 'react'
import { ScrollView, View, Text, Image, ImageBackground, StyleSheet, Dimensions, Animated, Easing } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const dailyContainerWidth = (windowWidth - 20 * 4.5) / 4.5;


const Weather = () => {

  /**** floating animation ****/
  const verticalValue = useRef(new Animated.Value(0)).current;
  const float = () => {
    Animated.loop(
        Animated.timing(verticalValue, {
            toValue:10,
            duration:700,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true
        })
    ).start();
  }
  useEffect(()=>{
    float();
    verticalValue.addListener(({value}) => {
        if(value == 10){
            Animated.timing(verticalValue, {
                toValue:0,
                duration:700,
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: true
            }).start();
        }
        if(value == 0) {
            Animated.timing(verticalValue, {
              toValue:10,
              duration:700,
              easing: Easing.inOut(Easing.quad),
              useNativeDriver: true
            }).start();
        }
    })
  })

  return (
    <ScrollView style={st.container}
                onMomentumScrollEnd={(e)=>{
                        console.log(e.nativeEvent.contentOffset.y);
                    }       
                }
                // onScrollEndDrag={(e)=>{
                //     if(e.nativeEvent.contentOffset.y > 20 && e.nativeEvent.contentOffset.y<157.42857360839844){
                //         e.target.scrollTo({animated:true, y:157.42857360839844})
                //     }
                // }}
                >
        <View style={st.borderRadius}>
            <ImageBackground source={require('../assets/images/bg_blue2.jpg')}
                            style={st.background}>
                <View style={st.todayContainer}>
                    <Text style={[st.greetings, st.textShadow]}>Good Morning</Text>
                    <Text style={[st.date, st.textShadowLight]}>8월 22일 월요일</Text>
                    <Text style={[st.date, st.textShadowLight]}>김포시 장기동</Text>
                    <View style={st.todayImageContainer}>
                        <Animated.Image source={require('../assets/images/w_d_rainy.png')}
                            style={[st.todayImage, {
                                    transform:[{
                                        translateY: verticalValue
                                    }]
                                }
                            ]}
                            resizeMode="contain" />
                    </View>
                    <View style={st.row}>
                        <Text style={[st.temperature, st.textShadow]}>28</Text>
                        <Text style={[st.degree, st.textShadow]}>&deg;</Text>
                    </View>
                    
                    <Text style={[st.highLow, st.textShadowLight]}>30&deg; / 24&deg;</Text>
                    <Text style={[st.highLow, st.textShadowLight]}>feels like 30&deg;</Text>
                    <Text style={[st.description, st.textShadow]}>비가 많이 와요.</Text>
                    
                    <View style={st.seperator} />
                    <View style={[st.row, st.detailsContainer]}>
                        <View style={st.details}>
                            <Image source={require('../assets/images/ic_uv.png')}
                                   style={st.detailsImage}
                                   resizeMode="contain" />
                            <Text style={[st.detailsText, st.textShadow]}>UV 5</Text>
                        </View>
                        <View style={st.details}>
                            <Image source={require('../assets/images/ic_humidity.png')}
                                   style={st.detailsImage}
                                   resizeMode="contain" />
                            <Text style={[st.detailsText, st.textShadow]}>71%</Text>
                        </View>
                        <View style={st.details}>
                            <Image source={require('../assets/images/ic_wind.png')}
                                   style={st.detailsImage}
                                   resizeMode="contain" />
                            <Text style={[st.detailsText, st.textShadow]}>2m/s</Text>
                        </View>
                    </View>
                    
                </View>
            </ImageBackground>
        </View>

        <ScrollView horizontal={true}
                    onMomentumScrollEnd={(e)=>{
                        console.log(e.nativeEvent.contentOffset.x);
                    }       
                }>
            <View style={[st.row, st.simpleWeekly]}>
                <View style={[st.dailyContainer, st.todayBackground]}>
                    <Text style={[st.dailyDate, st.todayText]}>오늘</Text>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                        style={st.dailyImage} />
                    <Text style={[st.dailyDegree, st.todayText]}>30&deg; / 24&deg;</Text>
                </View>
                <View style={st.dailyContainer}>
                    <Text style={st.dailyDate}>오늘</Text>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                        style={st.dailyImage} />
                    <Text style={st.dailyDegree}>30&deg; / 24&deg;</Text>
                </View>
                <View style={st.dailyContainer}>
                    <Text style={st.dailyDate}>오늘</Text>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                        style={st.dailyImage} />
                    <Text style={st.dailyDegree}>30&deg; / 24&deg;</Text>
                </View>
                <View style={st.dailyContainer}>
                    <Text style={st.dailyDate}>오늘</Text>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                        style={st.dailyImage} />
                    <Text style={st.dailyDegree}>30&deg; / 24&deg;</Text>
                </View>
                <View style={st.dailyContainer}>
                    <Text style={st.dailyDate}>오늘</Text>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                        style={st.dailyImage} />
                    <Text style={st.dailyDegree}>30&deg; / 24&deg;</Text>
                </View>
                <View style={st.dailyContainer}>
                    <Text style={st.dailyDate}>오늘</Text>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                        style={st.dailyImage} />
                    <Text style={st.dailyDegree}>30&deg; / 24&deg;</Text>
                </View>
                <View style={st.dailyContainer}>
                    <Text style={st.dailyDate}>오늘</Text>
                    <Image source={require('../assets/images/w_d_rainy.png')}
                        style={st.dailyImage} />
                    <Text style={st.dailyDegree}>30&deg; / 24&deg;</Text>
                </View>
            </View>
        </ScrollView>


        <ScrollView horizontal={true}
                    style={st.hourlyWeatherContainer}>
            <View style={[st.row, {marginRight:13}]}>
                <View style={st.hourlyContainer}>
                    <Text>16:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>17:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>18:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>19:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>20:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>21:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>22:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>23:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>24:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>01:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
                <View style={st.hourlyContainer}>
                    <Text>02:00</Text>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.hourlyWeatherImage} />
                    <Text>25&deg;</Text>
                    <View style={[st.row, {marginTop:5}]}>
                        <Image source={require('../assets/images/ic_humidity_fill.png')}
                               style={st.hourlyHumidityImage} />
                        <Text>40%</Text>
                    </View>
                </View>
            </View>
        </ScrollView>

        <View style={st.dustContainer}>
            <View style={[st.row, {justifyContent:'flex-start'}]}>
                <View style={[st.row, {width:'50%'}]}>
                    <View style={st.dustBar}>
                        <View style={st.dustBarGauge} />
                    </View>
                    <View>
                        <Text style={st.dustText}>미세먼지</Text>
                        <Text>보통</Text>
                        <Text>31&#181;m/m&sup2;</Text>
                    </View>
                </View>
                <View style={st.row}>
                    <View style={st.finedustBar}>
                        <View style={st.finedustBarGauge} />
                    </View>
                    <View>
                        <Text style={st.dustText}>초미세먼지</Text>
                        <Text>나쁨</Text>
                        <Text>45&#181;m/m&sup2;</Text>
                    </View>
                </View>                
            </View>
        </View>

        <ScrollView>
            <View style={[st.row, st.weeklyContainer]}>
                <Text style={st.weeklyDate}>8월 22일 월요일</Text>
                <View style={[st.row, {height:37, marginRight:-30}]}>
                    <Text style={st.weeklyTemperature}>30&deg;</Text>
                    <Text style={[st.weeklyTemperature, {fontSize:18, alignSelf:'flex-end'}]}>/24&deg;</Text>
                </View>
                <View style={st.weeklyImageContainer}>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.weeklyImage} />
                    <Text style={st.weeklyDescription}>조금 비</Text>
                </View>
            </View>
            <View style={[st.row, st.weeklyContainer]}>
                <Text style={st.weeklyDate}>8월 23일 화요일</Text>
                <View style={[st.row, {height:37, marginRight:-30}]}>
                    <Text style={st.weeklyTemperature}>30&deg;</Text>
                    <Text style={[st.weeklyTemperature, {fontSize:18, alignSelf:'flex-end'}]}>/24&deg;</Text>
                </View>
                <View style={st.weeklyImageContainer}>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.weeklyImage} />
                    <Text style={st.weeklyDescription}>조금 비</Text>
                </View>
            </View>
            <View style={[st.row, st.weeklyContainer]}>
                <Text style={st.weeklyDate}>8월 24일 수요일</Text>
                <View style={[st.row, {height:37, marginRight:-30}]}>
                    <Text style={st.weeklyTemperature}>30&deg;</Text>
                    <Text style={[st.weeklyTemperature, {fontSize:18, alignSelf:'flex-end'}]}>/24&deg;</Text>
                </View>
                <View style={st.weeklyImageContainer}>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.weeklyImage} />
                    <Text style={st.weeklyDescription}>조금 비</Text>
                </View>
            </View>
            <View style={[st.row, st.weeklyContainer]}>
                <Text style={st.weeklyDate}>8월 25일 목요일</Text>
                <View style={[st.row, {height:37, marginRight:-30}]}>
                    <Text style={st.weeklyTemperature}>30&deg;</Text>
                    <Text style={[st.weeklyTemperature, {fontSize:18, alignSelf:'flex-end'}]}>/24&deg;</Text>
                </View>
                <View style={st.weeklyImageContainer}>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.weeklyImage} />
                    <Text style={st.weeklyDescription}>조금 비</Text>
                </View>
            </View>
            <View style={[st.row, st.weeklyContainer]}>
                <Text style={st.weeklyDate}>8월 26일 금요일</Text>
                <View style={[st.row, {height:37, marginRight:-30}]}>
                    <Text style={st.weeklyTemperature}>30&deg;</Text>
                    <Text style={[st.weeklyTemperature, {fontSize:18, alignSelf:'flex-end'}]}>/24&deg;</Text>
                </View>
                <View style={st.weeklyImageContainer}>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.weeklyImage} />
                    <Text style={st.weeklyDescription}>조금 비</Text>
                </View>
            </View>
            <View style={[st.row, st.weeklyContainer]}>
                <Text style={st.weeklyDate}>8월 27일 토요일</Text>
                <View style={[st.row, {height:37, marginRight:-30}]}>
                    <Text style={st.weeklyTemperature}>30&deg;</Text>
                    <Text style={[st.weeklyTemperature, {fontSize:18, alignSelf:'flex-end'}]}>/24&deg;</Text>
                </View>
                <View style={st.weeklyImageContainer}>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.weeklyImage} />
                    <Text style={st.weeklyDescription}>조금 비</Text>
                </View>
            </View>
            <View style={[st.row, st.weeklyContainer]}>
                <Text style={st.weeklyDate}>8월 28일 일요일</Text>
                <View style={[st.row, {height:37, marginRight:-30}]}>
                    <Text style={st.weeklyTemperature}>30&deg;</Text>
                    <Text style={[st.weeklyTemperature, {fontSize:18, alignSelf:'flex-end'}]}>/24&deg;</Text>
                </View>
                <View style={st.weeklyImageContainer}>
                    <Image source={require('../assets/images/ic_hr_littleRainy.png')}
                           style={st.weeklyImage} />
                    <Text style={st.weeklyDescription}>조금 비</Text>
                </View>
            </View>
        </ScrollView>
    </ScrollView>
  )
}


const st = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'#fefefe'
    },

    /** 하루 상세 날씨 **/
    borderRadius:{
        marginTop:10,
        borderRadius:10,
        overflow: 'hidden',
        elevation:3
    },
    background:{
        flex:1,
        height:'100%',
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
        height:'100%',
        position:'absolute',
        top:0
    },
    temperature:{
        color:'#ffffff', //그라데이션 넣자
        fontWeight:'bold',
        fontSize:100
    },
    degree:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:50,
        position:'absolute',
        top:10,
        right:-20
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
        borderTopColor:'#ffffff',
        marginTop:15,
        marginBottom:0
    },
    detailsContainer:{
        flex:1,                    
        justifyContent:'space-evenly',
        // backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius:10,
        width:'90%',
    },
    details:{
        width:110,
        height:110,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:10
    },
    detailsImage:{
        width:'70%',
        height:'70%',
    },
    detailsText:{
       color:'#ffffff',
       fontSize:16,
       fontWeight:'bold'
    },

    /** 일주일 날씨 **/
    simpleWeekly:{
        justifyContent:'space-evenly',
        marginVertical:20,
    },
    dailyContainer:{
        justifyContent:'center',
        alignItems:'center',
        width: dailyContainerWidth,
        height:130,
        borderRadius:20,
        backgroundColor:'#ffffff',
        elevation:3,
        marginRight:15
    },
    dailyDate:{},
    dailyImage:{
        width:'70%',
        height:'35%',
        marginVertical:10
    },
    todayBackground:{
        backgroundColor:'dodgerblue'
    },
    todayText:{
        color:'#ffffff'
    },

    /** 하루날씨 시간별 그래프 */
    hourlyWeatherContainer:{
        marginBottom:20,
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor:'#ffffff',
        borderRadius:20,
        elevation:3
    },
    hourlyContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:10
    },
    hourlyWeatherImage:{
        width:50,
        height:50
    },
    hourlyHumidityImage:{
        width:20,
        height:20,
        marginRight:-2
    },

    /** 미세먼지 농도 **/
    dustContainer:{
        marginBottom:20,
        paddingVertical:15,
        paddingHorizontal:25,
        backgroundColor:'#ffffff',
        borderRadius:20,
        elevation:3
    },
    dustBar:{
        width:10, 
        height:60, 
        backgroundColor:'green',
        marginRight:15,
        borderRadius:5,
        opacity:0.5
    },
    dustBarGauge:{
        position:'absolute',
        bottom:0,
        backgroundColor:'green',
        width:10,
        height:31/100*60, //미세먼지 농도
        borderRadius:5
    },
    finedustBar:{
        width:10, 
        height:60, 
        backgroundColor:'orange',
        marginRight:15,
        borderRadius:5,
        opacity:0.5
    },
    finedustBarGauge:{
        position:'absolute',
        bottom:0,
        backgroundColor:'orange',
        width:10,
        height:45/100*60, //미세먼지 농도
        borderRadius:5
    },
    dustText:{
        marginBottom:10,
        color:'#999999'
    },

    /** 주간 날씨 **/
    weeklyWeatherContainer:{
        marginBottom:20
    },
    weeklyContainer:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        elevation:3,
        marginBottom:15,
        paddingHorizontal:15,
        justifyContent:'space-between',
        alignItems:'center'
    },
    weeklyDate:{
        fontSize:18,
        color:'#00aced',
        fontWeight:'bold',
        marginRight:30
    },
    weeklyTemperature:{
        fontSize:28,
        marginRight:0,
        color:'#a1a1a1'
    },
    weeklyImageContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    weeklyImage:{
        width:80,
        height:60
    },
    weeklyDescription:{
        fontSize:16,
        marginBottom:5,
        marginTop:-5,
        color:'#00aced',
        fontWeight:'bold'
    }

    ,row:{
        flexDirection:'row',
        alignItems:'center',
    },
    textShadow:{
        textShadowColor:'rgba(0,0,0,0.5)',
        textShadowOffset: {width:1, height:1},
        textShadowRadius:10
    },
    textShadowLight:{
        textShadowColor:'rgba(0,0,0,0.5)',
        textShadowOffset: {width:1, height:1},
        textShadowRadius:2
    }
})

export default Weather