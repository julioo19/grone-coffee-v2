import { Button, ScrollView, Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import SettingNavButton from '../components/SettingNavButton'
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import MercadoLibreHeader from '../components/SettingHeader'
type SettingStackParamList = {
    SettingScreen: undefined
    AboutScreen: undefined
    HomeScreen: undefined
}

type TabParamList = {
  Home: undefined;
  Carrito: undefined;
  Favoritos: undefined;
  Ajustes: undefined;
};

// 3. Define el RootStack
type RootStackParamList = {
  MainApp: undefined;
  NotificationScreen: undefined;
  AuthScreen: undefined;
};

type SettingStackNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabParamList>,
NativeStackNavigationProp<RootStackParamList>>;

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
                <MercadoLibreHeader></MercadoLibreHeader>
                <ScrollView style={styles.box}>
                    <SettingNavButton
                        onPress={() => navigation.navigate('Home')}
                        title='Inicio'
                        unstable_pressDelay={90}
                        Icon={<Ionicons name="home-outline" size={20} color="black" />} />
                    <SettingNavButton
                        onPress={() => console.log("Acerca de Grone Coffee")}
                        title='Acerca de Grone Coffee'
                        unstable_pressDelay={90}
                        Icon={<Feather name="info" size={20} color="black" />} />
                    <SettingNavButton
                        onPress={() => console.log("Tema Osuro o Claro")}
                        title='Temas'
                        unstable_pressDelay={90}
                        Icon={<MaterialCommunityIcons name="theme-light-dark" size={20} color="black" />} />

                    <SettingNavButton
                        onPress={() => console.log("Notificaciones")}
                        title='Notificaciones'
                        unstable_pressDelay={90}
                        Icon={<AntDesign name="bell" size={20} color="black" />} />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'rgb(0,0,0)',
    },

    box: {
        backgroundColor: "rgb(251, 251, 254)",
        paddingTop: 10,
        paddingBottom: 10,

    },
});