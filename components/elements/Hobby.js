import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TheIconMCI from '../TheIconMCI';
import TheIconFT from '../TheIconFT';
import TheIconAF6 from '../TheIconAF6';

export default function Hobby() {
    return (
        <View style={{ marginHorizontal: 20, marginTop: 20, padding: 5, backgroundColor: '#F8F8FF', borderRadius: 20 }}>
            <Text style={{ fontSize: 16, color: 'black', marginTop: 10, marginLeft: 20 }}>Hobbies</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <TheIconMCI title='walk' name='shoe-sneaker' size={50} color='black' />
                <TheIconMCI title='dancing' name='dance-ballroom' size={50} color='black' />
                <TheIconFT title='reading' name='book-open' size={50} color='black' />
                <TheIconMCI title='music' name='music' size={50} color='black' />

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <TheIconAF6 title='exercise' name='volleyball' size={50} color='black' />
                <TheIconMCI title='movie' name='movie-open' size={50} color='black' />
                <TheIconAF6 title='painting' name='paintbrush' size={50} color='black' />
                <TheIconMCI title='gaming' name='gamepad-variant' size={50} color='black' />

            </View>

        </View>
    );
}


