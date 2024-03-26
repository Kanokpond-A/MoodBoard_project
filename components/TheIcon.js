// import { StatusBar } from "expo-status-bar";
import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TheIcon(props) {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            {/* <TouchableOpacity style={{ alignItems: "center" }} onPress={props.onPress}>
        <FontAwesome name={props.name} size={props.size} color={props.color} />
        <Text>{props.title}</Text>
      </TouchableOpacity> */}

            {/* <TouchableOpacity style={{ alignItems: "center" }} onPress={props.onPress}>
        <FontAwesomeIcon name={props.name} size={props.size} color={props.color} />
        <Text>{props.title}</Text>
      </TouchableOpacity> */}

            

            <TouchableOpacity style={{ alignItems: "center" }} onPress={props.onPress}>
                <AntDesign name={props.name} size={props.size} color={props.color} />
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View >



  );
}

