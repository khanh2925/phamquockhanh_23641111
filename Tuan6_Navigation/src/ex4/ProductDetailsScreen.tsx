import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Stars } from "../components/Stars";
import { PHONE_COLORS, PHONES } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { useFavorites } from "./FavoritesContext";
import type { RootProps } from "./types";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  // TODO 4: lấy id từ params rồi tìm sản phẩm
  const { id } = route.params;
  const phone = PHONES.find((p) => p.id === id);
  const { has, toggle } = useFavorites();

  // TODO 5: không tìm thấy
  if (!phone) {
    return (
      <View style={s.center}>
        <Text style={s.muted}>Không tìm thấy sản phẩm #{id}</Text>
      </View>
    );
  }

  const saved = has(phone.id);

  // TODO 6 + 7: hiển thị chi tiết và nút yêu thích
  return (
    <ScrollView contentContainerStyle={s.container}>
      <Image source={PHONE_COLORS[phone.defaultColor].image} style={s.image} resizeMode="contain" />
      <Text style={s.name}>{phone.name}</Text>
      <View style={s.row}>
        <Stars value={phone.rating} size={20} />
        <Text style={s.muted}>  ({phone.reviewCount} đánh giá)</Text>
      </View>
      <View style={s.row}>
        <Text style={s.price}>{formatPrice(phone.price)}</Text>
        <Text style={s.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
      </View>
      <Text style={s.supplier}>
        Cung cấp bởi <Text style={{ fontWeight: "700" }}>{phone.supplier}</Text>
      </Text>

      <Pressable style={[s.favBtn, saved && s.favBtnOn]} onPress={() => toggle(phone.id)}>
        <Text style={[s.favText, saved && s.favTextOn]}>
          {saved ? "♥ Đã lưu" : "♡ Lưu vào yêu thích"}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", flexGrow: 1 },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  image: { width: "100%", height: 260 },
  name: { marginTop: 12, fontSize: 17, fontWeight: "600", color: colors.text },
  row: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  muted: { color: colors.muted },
  price: { fontSize: 20, fontWeight: "700", color: colors.red },
  oldPrice: { marginLeft: 12, color: colors.muted, textDecorationLine: "line-through" },
  supplier: { marginTop: 8, color: colors.text },
  favBtn: {
    marginTop: 20, height: 44, borderRadius: 6, borderWidth: 1, borderColor: colors.red,
    alignItems: "center", justifyContent: "center",
  },
  favBtnOn: { backgroundColor: colors.red },
  favText: { fontSize: 16, fontWeight: "700", color: colors.red },
  favTextOn: { color: "#fff" },
});