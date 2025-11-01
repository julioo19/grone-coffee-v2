import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import NotificationScreen from '../screens/NotificationScreen';
import AuthScreen from '../screens/AuthScreen';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainApp" component={TabNavigator} />
      <RootStack.Screen name="NotificationScreen" component={NotificationScreen} />
      <RootStack.Screen name="AuthScreen" component={AuthScreen} />
    </RootStack.Navigator>
  );
}
