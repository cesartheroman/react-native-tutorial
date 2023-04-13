import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://color-palette-api.kadikraman.vercel.app/palettes',
      );

      const palettes = await response.json();

      setColorPalettes(palettes);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getData();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [getData]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    console.log(newColorPalette);
    if (newColorPalette) {
      setColorPalettes((prevPalettes) => [newColorPalette, ...prevPalettes]);
    }
  }, [newColorPalette]);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      renderItem={({ item }) => (
        <PalettePreview
          onPress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewPalete');
          }}
        >
          <Text style={styles.buttonText}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
});

export default Home;
