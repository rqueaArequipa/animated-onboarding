import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Onboarding from './app/components/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import HomeScreen from './app/screens/HomeScreen';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewdOnboarding, setViewOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding')
      if (value != null) {
        setViewOnboarding(true)
      }
    } catch (error) {
      console.log('Error @checkOnboarding', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkOnboarding()
  }, [])

  return (
    <View style={styles.container}>
      {
        loading ? <Loading /> : viewdOnboarding ? <HomeScreen /> : <Onboarding />
      }
      <StatusBar style="auto" />
    </View>
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
