import { StyleSheet, Text, View, TextInput, Pressable, Animated } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import SearchBar from '../components/SearchBar'

const handleNotificationPress = () => {
    console.log('Abrir notificaciones');
    // navigation.navigate('Notifications');
  };
const HomeHeader = () => {
   return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <SearchBar
        placeholder='Busca un cafe'
        placeholderTextColor="#999"
        Icon={<Feather name="search" size={24} color="black" />}
        >

        </SearchBar>
<Pressable 
          onPress={handleNotificationPress}
          android_ripple={{ color: 'rgba(255, 255, 255, 0.3)', borderless: true }}
        >
          {({ pressed }) => (
            <View style={[
              styles.notificationButton,
              {
                backgroundColor: pressed 
                  ? 'rgba(255, 255, 255, 0.4)' 
                  : 'rgba(255, 255, 255, 0.2)',
                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
              }
            ]}>
              {<Ionicons name="notifications" size={24} color="black" />}
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(46, 204, 112)', // Verde Kopi Kap
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    height: 160,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    elevation: 2, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default HomeHeader