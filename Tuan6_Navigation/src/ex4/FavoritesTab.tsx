import React from "react";
import { Text, View } from "react-native";
import type { TabProps } from "./types";

export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
  // TODO 8: lấy ids từ useFavorites(); lọc PHONES theo ids;
  //   danh sách rỗng → "Chưa có sản phẩm nào được lưu."
  //   bấm một dòng cũng mở ProductDetails như Tab1.
  void navigation;
  return <View><Text>Favorites – chưa làm</Text></View>;
}
