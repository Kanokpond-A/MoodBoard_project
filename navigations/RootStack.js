import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      {/* <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      <Stack.Screen name="TravelTab" component={Travel} options={{title : 'Travel'}} />
      <Stack.Screen name="ResortTab" component={Resort} options={{title : 'Resort'}} />
      <Stack.Screen name="HealthTab" component={Health} options={{title : 'Health'}} /> */}
    </Stack.Navigator>
  );
}
