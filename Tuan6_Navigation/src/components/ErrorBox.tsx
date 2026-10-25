import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export function ErrorBox({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <View style={s.center}>
      <Text style={s.title}>Có lỗi xảy ra</Text>
      <Text style={s.msg}>{message}</Text>
      <Pressable style={s.btn} onPress={onRetry}>
        <Text style={s.btnText}>THỬ LẠI</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "700", color: colors.text },
  msg: { marginTop: 8, color: colors.muted, textAlign: "center" },
  btn: { marginTop: 16, backgroundColor: colors.red, borderRadius: 6, paddingVertical: 10, paddingHorizontal: 24 },
  btnText: { color: "#fff", fontWeight: "700" },
});
