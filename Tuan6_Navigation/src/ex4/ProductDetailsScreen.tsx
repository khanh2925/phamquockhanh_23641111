import React from "react";
import { Text, View } from "react-native";
import { useFavorites } from "./FavoritesContext";
import type { RootProps } from "./types";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  const { id } = route.params; // TODO 4: lấy id rồi tìm phone trong PHONES
  const { has, toggle } = useFavorites();
  // TODO 5: không tìm thấy → "Không tìm thấy sản phẩm #id"
  // TODO 6: hiển thị ảnh (màu mặc định), tên, sao, giá, nhà cung cấp
  // TODO 7: nút "♡ Lưu vào yêu thích" / "♥ Đã lưu" → toggle(phone.id)
  void has; void toggle;
  return <View><Text>Chi tiết #{id} – chưa làm</Text></View>;
}
