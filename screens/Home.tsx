import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }: any) => {
  const [colors, setColors] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://color-palette-api.kadikraman.vercel.app/palettes',
      );

      const colorPalettes = await response.json();

      setColors(colorPalettes);
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

  return (
    <FlatList
      style={styles.list}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <PalettePreview
          key={item.hexCode}
          onPress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text>Launch Modal</Text>
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
});

export default Home;
