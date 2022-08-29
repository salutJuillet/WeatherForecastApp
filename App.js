import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopStatusBar from './components/TopStatusBar';
import Weather from './components/Weather';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={st.container}>
        <View style={{flex: 1}}>
            <TopStatusBar />
            <Weather />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
});
