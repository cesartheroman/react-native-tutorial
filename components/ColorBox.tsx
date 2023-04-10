import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ColorProps {
  colorName: string;
  hexCode: string;
}

const ColorBox = ({ colorName, hexCode }: ColorProps) => {
  const colorStyle = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={styles.text}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ColorBox;
