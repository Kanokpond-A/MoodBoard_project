import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import Elements from "../screens/Elements";
import Calender from "../screens/Calender";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (



        <Tab.Navigator>
            <Tab.Screen
                name="Calender"
                component={Calender}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="calendar" color={color} size={size} />),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="ELements"
                component={Elements}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (<AntDesign name="meho" color={color} size={size} />),

                }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),

                }}
            />

        </Tab.Navigator>
    );



}
