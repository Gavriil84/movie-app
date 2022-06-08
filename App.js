import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY, BASE_URL, NOW_PLAYING, POPULAR, UPCOMING } from './src/config/api_config';
import { NativeBaseProvider } from 'native-base';
import TopNavigation from './src/components/layout/TopNavigation';
import AppStack from './src/components/stacks/AppStack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {


  return (
    <NativeBaseProvider>
      <StatusBar style='light' />
      <AppStack />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
