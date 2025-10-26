import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

//screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import NotificationScreen from './screens/NotificationScreen';
import CoffeeDetailScreen from './screens/CoffeeDetailScreen';
import AboutScreen from './screens/AboutScreen ';
import SettingScreen from './screens/SettingScreen';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();
const AuthStackNavigator = createNativeStackNavigator();
const SettingNavigator = createNativeStackNavigator();

function HomeStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='HomeScreen'>
            <HomeStackNavigator.Screen
                name='HomeScreen'
                component={HomeScreen} />

            <HomeStackNavigator.Screen
                name='CoffeeDetailScreen'
                component={CoffeeDetailScreen}
                options={{
                    headerBackVisible: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

function SettingStack() {
    return (
        <SettingNavigator.Navigator
            initialRouteName= 'SettingScreen'>
            <SettingNavigator.Screen
                name='SettingScreen'
                component={SettingScreen}
                options={{
                    //headerShown: false
                }}
            />
            <SettingNavigator.Screen
            name = 'AboutScreen'
            component={AboutScreen}
            options={{
                headerShown: false
            }}
            />
        </SettingNavigator.Navigator>
    )
}


function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: "rgb(46,204,113)"

            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={30} color={color} />
                    ),
                    tabBarBadge: 10,
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Carrito"
                component={CartScreen}
                options={{
                    tabBarLabel: "Pedidos",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={FavoriteScreen}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="heart" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Ajustes"
                component={SettingStack}
                options={{
                    tabBarLabel: "Ajustes",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="menu" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
