import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider ,SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
import PromoBanner from '../components/PromoBanner';

//
type HomeStackParamList = {
  HomeScreen: undefined;
  CoffeeDetailScreen: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <HomeHeader></HomeHeader>
        <PromoBanner
        title='Free Delivery!'
        subtitle='For your first order'
        description='We only apply first-time order'
        imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfjnUw9BKKspzx2WPJ1yGj-aBTE15lWGsDw&s'
        onPress={() => console.log("wawa")}
        ></PromoBanner>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})