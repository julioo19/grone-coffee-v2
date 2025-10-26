import { Button, ScrollView, Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

type SettingStackParamList = {
    SettingScreen: undefined
    AboutScreen: undefined
}

type SettingStackNavigationProp = NativeStackNavigationProp<SettingStackParamList, 'SettingScreen'>;

const SettingScreen = () => {
    const navigation = useNavigation<SettingStackNavigationProp>();
    return (
        /*
        TODO:
        - ScrollView w/ buttons, onPress() => navigate to another screen
        - 
        */
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.box}>
                    
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    box: {
        backgroundColor: "rgb(251, 251, 254)",
        paddingTop: 10,
        paddingBottom: 10,

    },
});