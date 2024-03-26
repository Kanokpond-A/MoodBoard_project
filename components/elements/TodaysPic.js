import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function TodaysPic() {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 20, padding: 5, backgroundColor: '#F8F8FF', borderRadius: 20 }}>
            <Text style={{ fontSize: 16, color: 'black', marginTop: 10, marginLeft: 20 }}>Today's picture</Text>
            <View>
                <TextInput></TextInput>
            </View>
        </View>
      );
}


