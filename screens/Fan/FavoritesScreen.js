import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useFavorites } from '../../contexts/FavoritesContext';
import { useTheme } from '../../contexts/ThemeContext';

const FavoritesScreen = () => {
  const { favorites } = useFavorites();
  const { themeMode } = useTheme();
  const isDark = themeMode === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1b1b1b' : '#e6f0ea' }]}>
      <Text style={[styles.header, { color: isDark ? '#fff' : '#2e4a36' }]}>🎞️ Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDark ? '#2b2b2b' : '#ffffff' }]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={[styles.title, { color: isDark ? '#fff' : '#2e4a36' }]}>{item.title}</Text>
              <Text style={{ color: isDark ? '#ccc' : '#666' }}>Año: {item.release_date}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ color: isDark ? '#ccc' : '#555', textAlign: 'center', marginTop: 20 }}>
            No hay películas favoritas aún.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  info: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default FavoritesScreen;