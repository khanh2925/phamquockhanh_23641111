import React from "react";
import { Text, View } from "react-native";
import type { TabProps } from "./types";

export function ProductsTab({ navigation }: TabProps<"Products">) {
  // TODO 3: FlatList data={PHONES}; mỗi dòng là <ProductRow phone={item} onPress={...} />
  //   onPress: navigation.navigate("ProductDetails", { id: item.id })
  void navigation;
  return <View><Text>Products – chưa làm</Text></View>;
}
