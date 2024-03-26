import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Account from '../components/settings/Account';
import Stattt from '../components/settings/Stattt';

export default function Settings() {
  return (

    <View>
      <Account />
      <Stattt />

    </View>

  );
}


