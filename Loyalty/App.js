import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

import colors from './src/theme/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:colors.primary}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <CustomButton name='Giriş' />
      <CustomButton name='Üye Ol'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
