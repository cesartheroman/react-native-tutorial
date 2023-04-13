import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  FlatList,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';

const NEW_COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
];

const AddColorPaletteModal = ({ navigation }) => {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleSubmit = useCallback(() => {
    if (!text) {
      Alert.alert('Please enter a palette name');
    } else {
      // const
      console.log('submitted!');
      navigation.goBack();
    }

    setText('');
  }, [text]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Name of your color palette</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Palette name"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={NEW_COLORS}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text>{item.colorName}</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    marginTop: 5,
    marginLeft: 12,
  },
  container: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddColorPaletteModal;
