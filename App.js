import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopStatusBar from './components/TopStatusBar';
import Weather from './components/Weather';
import * as Font from 'expo-font'


export default function App() {

  /**** custom fonts ****/
  const [isFontReady, setIsFontReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
        "AppleSDGothicNeoB": require('./assets/fonts/AppleSDGothicNeoB.ttf'),
        "AppleSDGothicNeoM": require('./assets/fonts/AppleSDGothicNeoM.ttf')
    });
  }


  
  useEffect(()=> {
    getFonts();
    setIsFontReady(true);
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
