import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function TodaysNote() {
    return (
        <View style={{ marginHorizontal: 20, marginTop: 20, padding: 5, backgroundColor: '#F8F8FF', borderRadius: 20 }}>
            <Text style={{ fontSize: 16, color: 'black', marginTop: 10, marginLeft: 20 }}>Today's note</Text>
            <View style= {{marginHorizontal : 20, marginTop: 20, padding:30, backgroundColor: '#F5DEB3', borderRadius: 20}}>
                <TextInput style ={{marginLeft : -20, marginTop : -20}} placeholder='Write here ...'></TextInput>
            </View>
        </View>
    );
}


