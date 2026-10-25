import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { colors } from "./src/theme";
import { SelectPhoneLocal } from "./src/ex1/SelectPhoneLocal";
import { SelectPhoneApi } from "./src/ex1/SelectPhoneApi";
import { BottomTabApp } from "./src/ex3/BottomTabApp";
import { StackTabApp } from "./src/ex4/StackTabApp";
import { DrawerApp } from "./src/ex5/DrawerApp";

const EXERCISES = [
  { key: "1", title: "Bài 1 – Select Phone", Comp: SelectPhoneLocal },
  { key: "2", title: "Bài 2 – Select Phone (API)", Comp: SelectPhoneApi },
  { key: "3", title: "Bài 3 – Bottom Tab", Comp: BottomTabApp },
  { key: "4", title: "Bài 4 – Stack + Tab + Params", Comp: StackTabApp },
  { key: "5", title: "Bài 5 – Drawer", Comp: DrawerApp },
];

export default function App() {
  const [current, setCurrent] = useState<string | null>(null);
  const ex = EXERCISES.find((e) => e.key === current);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        {ex ? (
          <View style={{ flex: 1 }}>
            <SafeAreaView edges={["top"]} style={s.bar}>
              <Pressable onPress={() => setCurrent(null)}>
                <Text style={s.back}>‹ Menu</Text>
              </Pressable>
              <Text style={s.barTitle}>{ex.title}</Text>
            </SafeAreaView>
            <ex.Comp />
          </View>
        ) : (
          <SafeAreaView style={s.menu}>
            <Text style={s.h1}>Lab 06 – Navigation</Text>
            {EXERCISES.map((e) => (
              <Pressable key={e.key} style={s.item} onPress={() => setCurrent(e.key)}>
                <Text style={s.itemText}>{e.title}</Text>
              </Pressable>
            ))}
          </SafeAreaView>
        )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const s = StyleSheet.create({
  menu: { flex: 1, padding: 16, backgroundColor: colors.bg },
  h1: { fontSize: 24, fontWeight: "700", color: colors.text, marginBottom: 16 },
  item: { backgroundColor: "#fff", padding: 16, borderRadius: 10, marginBottom: 10,
    borderWidth: 1, borderColor: colors.line },
  itemText: { fontSize: 16, color: colors.text, fontWeight: "600" },
  bar: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingBottom: 8,
    backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor: colors.line },
  back: { color: colors.red, fontSize: 16, fontWeight: "600", marginRight: 12 },
  barTitle: { fontSize: 15, fontWeight: "600", color: colors.text },
});
