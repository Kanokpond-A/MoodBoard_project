// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import { Text, TouchableOpacity, View } from "react-native";


export default function TheIconAF6(props) {
    return (

        <TouchableOpacity style={{ alignItems: "center" }} onPress={props.onPress}>
            <FontAwesome6 name={props.name} size={props.size} color={props.color} />
            <Text>{props.title}</Text>
        </TouchableOpacity>



    );
}

