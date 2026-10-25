import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { RootStackParamList, TabParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// TODO 1: function HomeTabs() — Tab.Navigator (headerShown:false) với 2 Tab.Screen:
//   "Products" (ProductsTab) và "Favorites" (FavoritesTab), mỗi tab có icon Ionicons.

// TODO 2: <FavoritesProvider><NavigationContainer><Stack.Navigator>
//   Stack.Screen "Home" (component HomeTabs, title "Cửa hàng")
//   Stack.Screen "ProductDetails" (component ProductDetailsScreen, title "Chi tiết sản phẩm")
export function StackTabApp() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bài 4 – chưa làm</Text>
    </View>
  );
}

void Stack; void Tab;
