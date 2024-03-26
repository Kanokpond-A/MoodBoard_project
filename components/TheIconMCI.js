import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


export default function TheIconMCI(props) {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            
            <TouchableOpacity style={{ alignItems: "center" }} onPress={props.onPress}>
                <MaterialCommunityIcons name={props.name} size={props.size} color={props.color} />
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View >



  );
}

