import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors } from "../theme";

type DrawerParamList = { Home: undefined; Profile: undefined; Settings: undefined };
const Drawer = createDrawerNavigator<DrawerParamList>();

function HomeScreen() {
  return <View style={s.center}><Text style={s.big}>Xin chào 👋</Text></View>;
}

function ProfileScreen() {
  return (
    <View style={s.center}>
      <View style={s.avatar}><Text style={s.avatarText}>NA</Text></View>
      <Text style={s.big}>Nguyễn Văn An</Text>
      <Text style={s.muted}>an.nguyen@example.com</Text>
    </View>
  );
}

// TODO 1: SettingsScreen — 2 state: notify (mặc định true) và dark (mặc định false).
//   Mỗi dòng: <Text>Nhận thông báo</Text> <Switch value={notify} onValueChange={setNotify} />
//   Dòng cuối: "Thông báo: BẬT/TẮT · Giao diện: tối/sáng".

// TODO 2: NavigationContainer > Drawer.Navigator
//   drawerIcon: Ionicons theo route (home-outline / person-outline / settings-outline)
//   drawerActiveTintColor: colors.red; 3 Drawer.Screen title tiếng Việt.
// TODO 3 (nâng cao): đưa notify/dark lên Context để chế độ tối đổi nền Home và Profile.
export function DrawerApp() {
  return (
    <View style={s.center}>
      <Text>Bài 5 – chưa làm</Text>
    </View>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  big: { fontSize: 22, fontWeight: "700", color: colors.text, marginTop: 12 },
  muted: { color: colors.muted, marginTop: 4 },
  avatar: { width: 96, height: 96, borderRadius: 48, backgroundColor: colors.red,
    alignItems: "center", justifyContent: "center" },
  avatarText: { color: "#fff", fontSize: 32, fontWeight: "700" },
});

void Drawer; void HomeScreen; void ProfileScreen;
