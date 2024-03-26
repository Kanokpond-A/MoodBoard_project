// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Feather } from '@expo/vector-icons';

import { Text, TouchableOpacity, View } from "react-native";


export default function TheIconFT(props) {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            
            <TouchableOpacity style={{ alignItems: "center" }} onPress={props.onPress}>
                <Feather name={props.name} size={props.size} color={props.color} />
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View >



  );
}

