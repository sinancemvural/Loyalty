import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function CustomDrawer(props) {
  const { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Hoş geldin 👋</Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        label="Çıkış Yap"
        onPress={logout}
        labelStyle={{ color: 'red', fontWeight: '600' }}
      />
    </DrawerContentScrollView>
  );
}
