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
  // useEffect(()=>{
  //     getFonts();
  //     setIsFontReady(true);
  // }, []);


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
    let currentMonth = convertToTwoDigitNumber(new Date(krNow).getMonth() +1);
    let currentDate = convertToTwoDigitNumber(new Date(krNow).getDate());
    setCurrentHour(convertToTwoDigitNumber(new Date(krNow).getHours()));

    let krNowPlusSevenDays = now + 7*24*60*60*1000;
    let weekAfter = new Date(krNowPlusSevenDays);
    let weekAfterYear = new Date(weekAfter).getFullYear();
    let weekAfterMonth = convertToTwoDigitNumber(new Date(weekAfter).getMonth() +1);
    let weekAfterDate = convertToTwoDigitNumber(new Date(weekAfter).getDate());
    setWeekAfterHour(convertToTwoDigitNumber(new Date(weekAfter).getHours()));

    setToday(`${currentYear}${currentMonth}${currentDate}`);
    setEndDay(`${weekAfterYear}${weekAfterMonth}${weekAfterDate}`);
  }

  const [forecast, setForecast] = useState(null);
  const REACT_APP_API_KEY = decodeURIComponent('kAQ2I%2FEj5gPadZwjV4AgwijIAjeDskDyWsY1YiTOBl%2B44SROzB9ltCq6d2%2FOWMjwHCjGcJHCg8fPSLiHFtyajA%3D%3D');
  const dailyRrl = 'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList';
  const hourlyUrl = 'http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList';
  const ultraShortForecastUrl = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
  const shortForecastUrl = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';
  const midLandForecastUrl = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst';

  const getUltraShortForecast = async () => {
    try{
      await axios({
        method: 'get',
        url: ultraShortForecastUrl,
        params:{
          serviceKey: REACT_APP_API_KEY,
          numOfRows: 60,
          pageNo: 1,
          dataType: 'JSON',
          base_date: today,
          base_time: '0500',
          nx: 55,
          ny: 128
        }
      })
      .then(response => {
        console.log(response);
        // setForecast(response);
      })
    }catch(err){
      console.log(err);
    }
  }

  const getShortForecast = async () => {
    try{
      await axios({
        method: 'get',
        url: shortForecastUrl,
        params:{
          serviceKey: REACT_APP_API_KEY,
          numOfRows: 2000,
          pageNo: 4,
          dataType: 'JSON',
          base_date: today,
          base_time: '0500',
          nx: 55,
          ny: 128
        }
      })
      .then(response => {
        console.log(response);
        // setForecast(response);
      })
    }catch(err){
      console.log(err);
    }
  }

  // const getMidLandForecast = async () => {
  //   try{
  //     await axios({
  //       method: 'get',
  //       url: midLandForecastUrl,
  //       params:{
  //         serviceKey: REACT_APP_API_KEY,
  //         numOfRows: 10,
  //         pageNo: 1,
  //         dataType: 'JSON',
  //         regId: '11B00000',
  //         tmFc: '202209010600'
  //       }
  //     })
  //     .then(response => {
  //       console.log(response);
  //       setForecast(response);
  //     })
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  useEffect(()=> {
    getFonts();
    setIsFontReady(true);
    getTime();
    // getUltraShortForecast();
    // getShortForecast();
    // getMidLandForecast();
  }, [])

  return (
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={st.container}>
          {
            isFontReady && forecast ? (
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
