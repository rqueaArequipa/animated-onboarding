import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen() {
    const clearOnboarding = async() => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding')
        } catch (error) {
            console.log('Error @clearOnboarding', error)
        }
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={clearOnboarding}>
                <Text>Clear Onboarding</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})