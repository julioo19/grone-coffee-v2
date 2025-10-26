import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//screens
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import NotificationScreen from './screens/NotificationScreen';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();


function MyStacks() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='HomeScreen'>
            <HomeStackNavigator.Screen
                name='HomeScreen'
                component={HomeScreen} />

            <HomeStackNavigator.Screen
                name='NotificationScreen'
                component={NotificationScreen}
                options={{
                    headerBackVisible: false
                }}
            />
        </HomeStackNavigator.Navigator>
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
                component={MyStacks}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={30} color={color} />
                    ),
                    tabBarBadge: 10,
                    //headerShown: false
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
                    //headerShown: false
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
