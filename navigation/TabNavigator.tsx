import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import HomeStackNavigator from './HomeStack';
import SettingStackNavigator from './SettingStack';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ 
        tabBarActiveTintColor: 'rgb(46,204,113)',
        animation: 'shift'
        }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={CartScreen}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => <Entypo name="shopping-cart" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color }) => <Entypo name="heart" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={SettingStackNavigator}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({ color }) => <Entypo name="menu" size={24} color={color} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
