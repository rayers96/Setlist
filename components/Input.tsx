import { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  defaultText: string;
}

export default function Input({ defaultText }: Props) {

  const [text, setText] = useState(defaultText);
  const [editMode, setEditMode] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.row}>
        <View style={{ flex: 1 }}>
          {editMode ?
            <TextInput
              style={styles.input}
              onChangeText={newText => setText(newText)}
              value={text}
            /> :
            <Text style={styles.notEditing}>{text}</Text>
          }
        </View>
        <View style={{ flexDirection: 'row', margin: 12, justifyContent: 'space-evenly', gap: 12 }}>
          <MaterialIcons.Button
            name={editMode ? "save" : "edit"}
            onPress={() => setEditMode(!editMode)}
            size={40}
            borderRadius={12.5}
            backgroundColor={editMode ? "#8FBC8F" : "#B0C4DE"}
            iconStyle={{margin: -5}}
          />
          <MaterialIcons.Button
            name={"delete"}
            //onPress={() => setEditMode(!editMode)}
            size={40}
            borderRadius={12.5}
            backgroundColor={"#F08080"}
            iconStyle={{margin: -5}}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 75, 
    flexDirection: 'row', 
    margin: 12, 
    borderWidth: 2, 
    borderRadius: 25, 
    borderColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  input: {
    borderRadius: 12.5,
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  notEditing: {
    margin: 12,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
