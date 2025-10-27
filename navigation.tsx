import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

//screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import CoffeeDetailScreen from './screens/CoffeeDetailScreen';
import AboutScreen from './screens/AboutScreen ';
import SettingScreen from './screens/SettingScreen';
import NotificationScreen from './screens/NotificationScreen';
import AuthScreen from './screens/AuthScreen';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator
            initialRouteName='HomeScreen'>
            <HomeStack.Screen
                name='HomeScreen'
                component={HomeScreen} />

            <HomeStack.Screen
                name='CoffeeDetailScreen'
                component={CoffeeDetailScreen}
                options={{
                    headerBackVisible: false
                }}
            />
        </HomeStack.Navigator>
    )
}

function SettingStackNavigator() {
    return (
        <SettingStack.Navigator
            initialRouteName= 'SettingScreen'>
            <SettingStack.Screen
                name='SettingScreen'
                component={SettingScreen}
                options={{
                    //headerShown: false
                }}
            />
            <SettingStack.Screen
            name = 'AboutScreen'
            component={AboutScreen}
            options={{
                headerShown: false
            }}
            />
        </SettingStack.Navigator>
    )
}

function RootStackNavigator(){
    return(
        <RootStack.Navigator>
            <RootStack.Screen
            name='MainApp'
            component={TabNavigator}
            options={{
                headerShown: false,
                presentation: 'card'
            }}
            />
            <RootStack.Screen
            name='NotificationScreen'
            component={NotificationScreen}
            options={{
                headerShown: false,
                presentation: 'card'
            }}
            />
            <RootStack.Screen
            name = 'AuthScreen'
            component={AuthScreen}
            options={{
                headerShown: false,
                presentation: 'modal'
            }}
            />
        </RootStack.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: "rgb(46,204,113)"

            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
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
                component={SettingStackNavigator}
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
            <RootStackNavigator/>
        </NavigationContainer>
    )
}
