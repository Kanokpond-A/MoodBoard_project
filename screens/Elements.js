import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HowWas from '../components/elements/HowWas';
import People from '../components/elements/People';
import Weather from '../components/elements/Weather';
import TodaysPic from '../components/elements/TodaysPic';
import TodaysNote from '../components/elements/TodaysNote';
import Hobby from '../components/elements/Hobby';

export default function Elements() {
  return (
    <ScrollView>

      <View style={{ backgroundColor: '#A0522D' }}>
        <HowWas />
        <People />
        <Weather />
        <Hobby />
        <TodaysPic />
        <TodaysNote />
      </View>

    </ScrollView>


  );
}


