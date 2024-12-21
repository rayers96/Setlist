import { useState } from 'react';
import { FlatList, View, StyleSheet, Button,} from 'react-native';

import Input from '@/components/Input';

export default function Index() {

  const songs = [
    { title: "Bit Better" },
    { title: "Back to Back" },
    { title: "YNBA" },
    { title: "Lightburst" },
    { title: "Getting Time" },
    { title: "New Years" }
  ];

  const [editMode, setEditMode] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => setEditMode(!editMode)}
        title={editMode ? "Save" : "Edit"}
        color={editMode ? "#8FBC8F" : "#F08080"}
        accessibilityLabel={editMode ? "Save this setlist" : "Edit this setlist"}
      />

      <FlatList 
        data={songs}
        renderItem={({ item }) => <Input defaultText={item.title} editMode={editMode} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e'
  },
  text: {
    color: '#fff',
  }
});
