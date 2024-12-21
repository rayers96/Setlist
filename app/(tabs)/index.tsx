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


  return (
    <View style={styles.container}>
      <FlatList 
        data={songs}
        renderItem={({ item }) => <Input defaultText={item.title}/>}
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
