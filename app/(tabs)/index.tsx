import { useState } from 'react';
import { FlatList, View, StyleSheet, Button,} from 'react-native';

import Input from '@/components/Input';
import { Data } from '@/data/Data';

export default function Index() {

  const [data, setData] = useState(Data);

  const editData = (title: string, id: number) => {
    console.log("edit data " + id);
    setData((data) => {
      data[data.findIndex((item) => item.id == id)] = {title: title, id: id};
      return data;
    });
    console.log(data);
  };

  const deleteData = (id: number) => {
    console.log("delete data " + id);
    setData((data) => {
      return data.filter((item) => item.id !== id);
    });
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({ item }) => <Input data={item} EditData={editData} DeleteData={deleteData}/>}
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
