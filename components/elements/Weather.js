import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  TheIconFT, { Feather }  from '../TheIconFT';



export default function Weather() {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 20, padding: 5, backgroundColor: '#F8F8FF', borderRadius: 20 }}>
            <Text style={{ fontSize: 16, color: 'black', marginTop:10, marginLeft:20 }}>Weather</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' ,marginTop : 20}}>
                <TheIconFT  title = 'sunny' name='sun' size={50} color='black' />
                <TheIconFT  title = 'cloudy' name='cloud' size={50} color='black' />
                <TheIconFT title = 'rainy' name='cloud-drizzle' size={50} color='black' />
                <TheIconFT title = 'snowy' name='cloud-snow' size={50} color='black' />
                <TheIconFT title = 'windy' name='wind' size={50} color='black' />
            </View>
        </View>
      );
}


