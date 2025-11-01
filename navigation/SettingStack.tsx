import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen ';

const SettingStack = createNativeStackNavigator();

export default function SettingStackNavigator() {
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
      <SettingStack.Screen name="AboutScreen" component={AboutScreen} />
    </SettingStack.Navigator>
  );
}
