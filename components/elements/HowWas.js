import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TheIcon from '../TheIcon';
import { FontAwesome6 } from '@expo/vector-icons';

export default function HowWas() {
    return (

        <View style={{ marginHorizontal: 20, marginTop: 100, padding: 5, backgroundColor: '#F8F8FF', borderRadius: 20 ,alignItems:'center'}}>
            <Text style={{ fontSize: 16, color: 'black', marginTop:10 }}>How was your day?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' ,marginTop : 20}}>
                <TheIcon  name='frown' size={50} color='#D3D3D3' />
                <FontAwesome6  name='face-frown-open' size={50} color='#BC8F8F' />
                <TheIcon  name='meho' size={50} color='#DB7093' />
                <FontAwesome6  name='face-smile' size={50} color='#FF69B4' />
                <TheIcon  name='smile-circle' size={50} color='#FF1493' />
            </View>
        </View>
        
    );
}


