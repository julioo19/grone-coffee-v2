import { Button, ScrollView, Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import SettingNavButton from '../components/SettingNavButton'

type SettingStackParamList = {
    SettingScreen: undefined
    AboutScreen: undefined
    AuthScreen: undefined
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
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={90} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />
                    <SettingNavButton onPress={() => console.log("asa")} title='Auth' unstable_pressDelay={70} />

                </ScrollView>
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