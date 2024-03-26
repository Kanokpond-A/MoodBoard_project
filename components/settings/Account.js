import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Account() {
    return (

        <View style={{ marginHorizontal: 20, marginTop: 100, padding: 5, backgroundColor: '#A0522D', borderRadius: 20 }}>
            <Text style={{ fontSize: 20, color: '#F5DEB3', marginTop:10 , marginLeft:20}}>Account</Text>
            <View style = {{marginHorizontal:20, marginTop : 10, backgroundColor :'#F8F8FF',padding: 50, borderRadius:20, flexDirection:'row'}}></View>


        </View>



    );
}


