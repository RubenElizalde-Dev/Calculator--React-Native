import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/Views/CalculadoraScreen'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar
        backgroundColor="black"
        barStyle='light-content' />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;
