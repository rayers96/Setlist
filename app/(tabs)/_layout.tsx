import { Tabs } from 'expo-router';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerRight: () =>
          <View style={{ margin: 24 }}>
            <MaterialIcons.Button
              name='add'
              size={40}
              borderRadius={12.5}
              backgroundColor={"#8FBC8F"}
              iconStyle={{ margin: -5 }}
            />
          </View>,
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Setlists',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name='queue-music' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name='information-circle-outline' color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
