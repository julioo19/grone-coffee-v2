import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

//
type HomeStackParamList = {
  HomeScreen: undefined;
  NotificationScreen: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View>
      <Text>THIS IS THE HOME SCREEN</Text>
      <CustomButton
        onPress={() => navigation.navigate('NotificationScreen')}
        title='Go to Notification Screen'
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})