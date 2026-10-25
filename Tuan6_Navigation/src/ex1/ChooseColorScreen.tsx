import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLOR_ORDER, PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { ColorKey, Phone } from "../types";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & { phone: Phone };

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  const [picked, setPicked] = useState<ColorKey | undefined>(route.params?.color);
  const [line1, line2] = phone.name.split(" - "); // "Điện Thoại Vsmart Joy 3" / "Hàng chính hãng"

  return (
    <SafeAreaView style={styles.root} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Image
          source={PHONE_COLORS[picked ?? phone.defaultColor].image}
          style={styles.thumb}
          resizeMode="contain"
        />
        <View style={styles.headerText}>
          <Text style={styles.small}>{line1}</Text>
          <Text style={styles.small}>{line2}</Text>

          {/* TODO 3: chỉ hiện khi đã chọn màu */}
          {picked && (
            <>
              <Text style={[styles.small, styles.gap]}>
                Màu: <Text style={styles.bold}>{PHONE_COLORS[picked].label}</Text>
              </Text>
              <Text style={[styles.small, styles.gap]}>
                Cung cấp bởi <Text style={styles.bold}>{phone.supplier}</Text>
              </Text>
              <Text style={[styles.price, styles.gap]}>{formatPrice(phone.price)}</Text>
            </>
          )}
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.hint}>Chọn một màu bên dưới:</Text>
        <View style={styles.swatches}>
          {COLOR_ORDER.map((key) => (
            <Pressable
              key={key}
              onPress={() => setPicked(key)}
              style={[
                styles.swatch,
                { backgroundColor: PHONE_COLORS[key].hex },
                picked === key && styles.swatchOn,
              ]}
            />
          ))}
        </View>

        {/* TODO 4: nút XONG */}
        <Pressable
          style={styles.doneBtn}
          onPress={() => navigation.navigate("Product", { color: picked }, { merge: true })}
        >
          <Text style={styles.doneText}>XONG</Text>
        </Pressable>
      </View>
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
  root: { flex: 1, backgroundColor: "#fff" },
  header: { flexDirection: "row", height: 149, paddingTop: 9, paddingLeft: 2, backgroundColor: "#fff" },
  thumb: { width: 114, height: 128 },
  headerText: { flex: 1, marginLeft: 19, paddingTop: 8 },
  small: { fontSize: 15, color: "#000" },
  gap: { marginTop: 7 },
  bold: { fontWeight: "700" },
  price: { fontSize: 18, fontWeight: "700", color: "#000" },
  body: { flex: 1, backgroundColor: colors.grey, paddingHorizontal: 17, paddingVertical: 10 },
  hint: { fontSize: 18, color: "#000" },
  swatches: { flex: 1, alignItems: "center", justifyContent: "center", gap: 13 },
  swatch: { width: 85, height: 80 },
  swatchOn: { borderWidth: 3, borderColor: colors.navy, ...shadow },
  doneBtn: {
    height: 44,
    borderRadius: 4,
    backgroundColor: colors.blue,
    borderWidth: 1,
    borderColor: "#CA1536",
    alignItems: "center",
    justifyContent: "center",
    ...shadow,
  },
  doneText: { fontSize: 20, fontWeight: "700", color: "#F9F2F2" },
});