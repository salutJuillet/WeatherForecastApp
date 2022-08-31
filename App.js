import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopStatusBar from './components/TopStatusBar';
import Weather from './components/Weather';
import * as Font from 'expo-font'
import axios from 'axios'


export default function App() {

  /**** custom fonts ****/
  const [isFontReady, setIsFontReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
        "AppleSDGothicNeoB": require('./assets/fonts/AppleSDGothicNeoB.ttf'),
        "AppleSDGothicNeoM": require('./assets/fonts/AppleSDGothicNeoM.ttf')
    });
  }
  useEffect(()=>{
      getFonts();
      setIsFontReady(true);
  }, []);


  /**** 날씨 데이터 가져오기 ****/
  const convertToTwoDigitNumber = (number) => {
    if(number < 10){
      return '0' + number;
    }else{
      return number
    }
  }

  const [today, setToday] = useState('');
  const [endDay, setEndDay] = useState('');
  const [currentHour, setCurrentHour] = useState('');
  const [weekAfterHour, setWeekAfterHour] = useState('')
  const getTime = () => {
    let now = new Date().getTime() + 9*60*60*1000; //한국 시간 밀리세컨드

    let krNow = new Date(now);
    let currentYear = new Date(krNow).getFullYear();
    let currentMonth = convertToTwoDigitNumber(new Date(krNow).getMonth());
    let currentDate = convertToTwoDigitNumber(new Date(krNow).getDate());
    setCurrentHour(convertToTwoDigitNumber(new Date(krNow).getHours()));

    let krNowPlusSevenDays = now + 7*24*60*60*1000;
    let weekAfter = new Date(krNowPlusSevenDays);
    let weekAfterYear = new Date(weekAfter).getFullYear();
    let weekAfterMonth = convertToTwoDigitNumber(new Date(weekAfter).getMonth());
    let weekAfterDate = convertToTwoDigitNumber(new Date(weekAfter).getDate());
    setWeekAfterHour(convertToTwoDigitNumber(new Date(weekAfter).getHours()));

    setToday(`${currentYear}${currentMonth}${currentDate}`);
    setEndDay(`${weekAfterYear}${weekAfterMonth}${weekAfterDate}`);
  }
console.log(currentHour);
console.log(weekAfterHour);

  const REACT_APP_API_KEY = decodeURIComponent('kAQ2I%2FEj5gPadZwjV4AgwijIAjeDskDyWsY1YiTOBl%2B44SROzB9ltCq6d2%2FOWMjwHCjGcJHCg8fPSLiHFtyajA%3D%3D');
  const dailyRrl = 'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList';
  const hourlyUrl = 'http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList';

  const getDailyWeather = async () => {
    try{
        await axios({
            method:'get',
            url: dailyRrl,
            params:{
                serviceKey: REACT_APP_API_KEY,
                dataCd: 'ASOS',
                dateCd: 'DAY',
                startDt: today,
                endDt: endDay,
                stnIds: 108
            }
        })
        .then(response => {
            console.log(response)
        })
    }catch(err){
        console.log(err)
    }
  }

  const getHourlyWeather = async () => {
    try{
        await axios({
            method:'get',
            url: hourlyUrl,
            params:{
                serviceKey: REACT_APP_API_KEY,
                dataCd:'ASOS',
                dateCd: 'HR',
                startDt: today,
                startHh: currentHour,
                endDt: endDay,
                endHh: weekAfterHour,
                stnIds: 108
            }
        })
        .then(response => {
            console.log(response)
        })
    }catch(err){
        console.log(err)
    }
  }
  useEffect(()=> {
    getTime();
    // getDailyWeather();
    getHourlyWeather();
  }, [])

  return (
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={st.container}>
          {
            isFontReady ? (
              <View style={{flex: 1}}>
                  <TopStatusBar />
                  <Weather />
              </View>
            ) : (
              <View style={st.loading}>
                <Text>Loading...</Text>
              </View>
            )
          }
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'dodgerblue'
  },
  loading:{
    flex:1,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center'
  }
});
