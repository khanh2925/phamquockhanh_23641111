import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Stars } from "../components/Stars";
import { PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { Phone } from "../types";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & { phone: Phone };

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;          // màu nhận về từ ChooseColor (lần đầu = undefined)
  const shown = picked ?? phone.defaultColor;  // chưa chọn thì dùng màu mặc định

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageWrap}>
        <Image source={PHONE_COLORS[shown].image} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{phone.name}</Text>
        <View style={styles.row}>
          <Stars value={phone.rating} size={24} />
          <Text style={styles.review}>(Xem {phone.reviewCount} đánh giá)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{formatPrice(phone.price)}</Text>
          <Text style={styles.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badge}>{phone.badge}</Text>
          <Ionicons name="help-circle-outline" size={22} color="#000" style={{ marginLeft: 8 }} />
        </View>

        {/* TODO 1: nút chọn màu */}
        <Pressable
          style={styles.chooseBtn}
          onPress={() => navigation.navigate("ChooseColor", { color: picked })}
        >
          <Text style={styles.chooseText}>
            {picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}
          </Text>
          <Ionicons name="chevron-forward" size={22} color="#000" style={styles.arrow} />
        </Pressable>
      </View>

      {/* TODO 2: nút CHỌN MUA sát đáy */}
      <Pressable style={styles.buyBtn}>
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const shadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 18, paddingBottom: 13 },
  imageWrap: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: "84%", height: "100%" },
  info: { paddingTop: 4 },
  name: { fontSize: 15, color: "#000" },
  row: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  review: { marginLeft: 22, fontSize: 15, color: "#000" },
  price: { fontSize: 18, fontWeight: "700", color: "#000", width: 140 },
  oldPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0,0,0,0.58)",
    textDecorationLine: "line-through",
  },
  badge: { fontSize: 12, fontWeight: "700", color: "#FA0000" },
  chooseBtn: {
    marginTop: 16,
    height: 34,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.46)",
    borderRadius: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    ...shadow,
  },
  chooseText: { fontSize: 15, color: "#000" },
  arrow: { position: "absolute", right: 12 },
  buyBtn: {
    marginTop: 56,
    height: 44,
    borderRadius: 6,
    backgroundColor: colors.red,
    borderWidth: 1,
    borderColor: "#CA1536",
    alignItems: "center",
    justifyContent: "center",
    ...shadow,
  },
  buyText: { fontSize: 20, fontWeight: "700", color: "#F9F2F2" },
});