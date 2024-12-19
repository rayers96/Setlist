import React from 'react'
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { FlashList } from "@shopify/flash-list";

import Input from '@/components/Input';

export default function Index() {

  const songs = [
    {title:"Bit Better"},
    {title:"Back to Back"},
    {title:"YNBA"},
    {title:"Lightburst"},
    {title:"Getting Time"},
    {title:"New Years"}
  ];

  return (
    <View style={styles.container}>

      <FlashList
        data={songs}
        renderItem={({item}) => <Input defaultText={item.title}/>}
        estimatedItemSize={10}
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
