import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CoffeeDetailScreen from '../screens/CoffeeDetailScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="CoffeeDetailScreen" component={CoffeeDetailScreen} />
    </HomeStack.Navigator>
  );
}