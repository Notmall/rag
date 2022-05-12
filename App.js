import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/mainScreen";
import Luxury from "./screens/luxury";
import Family from "./screens/family";
import Famous_places from "./screens/Famous_places";
import Camping from "./screens/Camping_1";
import Details from "./screens/details";

const { Navigator, Screen } = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="mainScreen" component={MainScreen} />
          <Screen name="Luxury" component={Luxury} />
          <Screen name="Family" component={Family} />
          <Screen name="Famous_places" component={Famous_places} />
          <Screen name="Camping" component={Camping} />
          <Screen name="Details" component={Details} />
        </Navigator>
      </NavigationContainer>
    );
  }
}
