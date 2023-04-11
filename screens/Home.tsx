import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import COLOR_PALETTES from '../data';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }: any) => (
  <FlatList
    style={styles.list}
    data={COLOR_PALETTES}
    keyExtractor={(item) => item.paletteName}
    renderItem={({ item }) => (
      <PalettePreview
        onPress={() => navigation.navigate('ColorPalette', item)}
        palette={item}
      />
    )}
  />
);

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
