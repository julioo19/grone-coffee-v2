import React from 'react';
import { View, Text, Pressable, StatusBar, StyleSheet } from 'react-native';

const MercadoLibreHeader = () => {
  const handleProfilePress = () => {
    console.log('Navegar a perfil');
    // Aquí navegarías a la pantalla de perfil
    // navigation.navigate('Profile');
  };

  return (
    <>
      
      <View style={styles.header}>
        <Pressable 
          style={styles.profileContainer}
          onPress={handleProfilePress}
          android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
        >
          {/* Avatar circular con iniciales */}
          <View style={styles.avatar}>
            <Text style={styles.initials}>JC</Text>
          </View>

          {/* Información del usuario */}
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Julio</Text>
            <Text style={styles.profileText}>Mi perfil</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#"rgb(46,204,113)"',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 4, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3483FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  userInfo: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  profileText: {
    fontSize: 13,
    color: '#666666',
  },
});

export default MercadoLibreHeader;