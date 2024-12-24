import { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Song } from '@/data/Data';

type Props = {
  data: Song;
  EditData: Function;
  DeleteData: Function;
}

export default function Input({ data, EditData, DeleteData }: Props) {

  const [song, setSong] = useState(data);
  const [editMode, setEditMode] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.row}>
        <View style={{ flex: 1 }}>

          <TextInput
            style={editMode ? styles.input : styles.notEditing}
            onChangeText={text => {
              setSong({...song, title: text});
              EditData(text, song.id);
          }}
            value={song.title}
            onFocus={() => setEditMode}
            onBlur={() => setEditMode}
          />

        </View>
        <View style={{ margin: 10}}>
            <MaterialIcons.Button
              name={"delete"}
              onPress={() => {DeleteData(song.id)}}
              size={40}
              borderRadius={10}
              backgroundColor={"#F08080"}
              iconStyle={{marginRight: 0}}
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
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#717e8e',
    alignItems: 'center'
  },
  input: {
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  notEditing: {
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

