import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


type Props = {
  defaultText: string;
}

export default function Input({ defaultText }: Props) {

  const [text, setText] = useState(defaultText);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}
        value={text}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderColor: '#fff'
  }
});
