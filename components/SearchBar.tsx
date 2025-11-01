import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const SearchBar = ({
    placeholder,
    placeholderTextColor,
    Icon
}: SearchBarProps) => {
  return (
    <View style={styles.searchBar}>
          {/* Ícono de búsqueda - reemplaza con tu ícono */}
          <View style={styles.searchIcon}>
            {Icon}
            
          </View>
          
          <TextInput
            style={styles.searchInput}
            placeholder= {placeholder}
            placeholderTextColor={placeholderTextColor} //"#999"
            //onChangeText={handleSearch}
          />
        </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
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
})