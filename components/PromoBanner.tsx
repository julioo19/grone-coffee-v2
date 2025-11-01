import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const PromoBanner = ({ 
  title,
  subtitle,
  description,
  imageUrl,
  onPress 
}: PromoBannerProps) => {
  return (
    <Pressable 
      onPress={onPress}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.05)' }}
    >
      {({ pressed }) => (
        <View style={[
          styles.container,
          pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] }
        ]}>
          {/* Círculo verde blur decorativo (opcional) */}
          <View style={styles.backgroundBlur} />

          {/* Contenido de texto */}
          <View style={styles.textContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </View>

          {/* Imagen del café */}
          <View style={styles.imageContainer}>
            {imageUrl ? (
              <Image 
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="contain"
              />
            ) : (
              // Placeholder cuando no hay imagen
              <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>☕</Text>
              </View>
            )}
          </View>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden', // para el círculo blur
    minHeight: 100,
  },
  backgroundBlur: {
    position: 'absolute',
    right: 40,
    top: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2A9D8F',
    opacity: 0.15,
  },
  textContent: {
    flex: 1,
    paddingRight: 8,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A9D8F',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 40,
  },
});

export default PromoBanner;