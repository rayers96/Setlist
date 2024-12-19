import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function Index() {

  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setlists go here!</Text>


      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}
        value={text}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderColor: '#fff'
  }
});
