import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TheIcon from '../TheIcon';
import { FontAwesome6 } from '@expo/vector-icons';
import TheIconAF6 from '../TheIconAF6';

export default function People() {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 20, padding: 5, backgroundColor: '#F8F8FF', borderRadius: 20}}>
            <Text style={{ fontSize: 16, color: 'black', marginTop:10, marginLeft :20 }}>People</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' ,marginTop : 20}}>
                <TheIcon  title = 'friends' name='star' size={50} color='yellow' />
                <TheIcon  title = 'familys' name='home' size={50} color='black' />
                <TheIcon  title = 'partner' name='heart' size={50} color='black' />
                <TheIconAF6 title = 'acquaintance' name='face-meh-blank' size={50} color='black' />
                <TheIcon  title = 'none' name='close' size={50} color='black' />
            </View>
        </View>
      );
}


