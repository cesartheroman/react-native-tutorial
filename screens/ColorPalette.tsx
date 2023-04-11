import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => (
  <View style={styles.container}>
    <FlatList
      data={route.params.colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
  },
});

export default ColorPalette;
