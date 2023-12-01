import React from "react";
import TabNavigator from "./components/TabNavigator/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./components/store/CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
