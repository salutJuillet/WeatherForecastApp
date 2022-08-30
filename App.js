import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopStatusBar from './components/TopStatusBar';
import Weather from './components/Weather';
import * as Font from 'expo-font'


export default function App() {

  const [isFontReady, setIsFontReady] = useState(false);

    useEffect(()=>{
        const getFonts = () => {
                Font.loadAsync({
                AppleSDGothicNeoB: require('./assets/fonts/AppleSDGothicNeoB.ttf'),
                AppleSDGothicNeoM: require('./assets/fonts/AppleSDGothicNeoM.ttf')
            });
        }
        setIsFontReady(true);
        getFonts();
    }, []);

  return (
    isFontReady ? (
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={st.container}>
          <View style={{flex: 1}}>
              <TopStatusBar />
              <Weather />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    )
    : (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'dodgerblue'
  },
});
