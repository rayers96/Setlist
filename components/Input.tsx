import { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';


type Props = {
  defaultText: string;
  editMode: boolean;
}

export default function Input({ defaultText, editMode }: Props) {

  const [text, setText] = useState(defaultText);

  return (
    <View>
      {editMode ?
        <TextInput
          style={styles.input}
          onChangeText={newText => setText(newText)}
          value={text}
        /> :
        <Text style={styles.notEditing}>{text}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#25292e',
    borderColor: '#fff',
    backgroundColor: '#fff'
  },
  notEditing: {
    borderRadius: 12,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderColor: '#fff',
    alignSelf: 'flex-start'
  }
});
