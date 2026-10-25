import React, { createContext, useContext, useMemo, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

type DrawerParamList = { Home: undefined; Profile: undefined; Settings: undefined };
const Drawer = createDrawerNavigator<DrawerParamList>();

// icon cho từng mục trong menu
const ICONS: Record<keyof DrawerParamList, keyof typeof Ionicons.glyphMap> = {
  Home: "home-outline",
  Profile: "person-outline",
  Settings: "settings-outline",
};

// ===== TODO 3 (nâng cao): Context dùng chung cài đặt cho mọi màn =====
type Settings = {
  notify: boolean;
  setNotify: (v: boolean) => void;
  dark: boolean;
  setDark: (v: boolean) => void;
};
const SettingsContext = createContext<Settings | null>(null);

function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings phải nằm trong SettingsContext.Provider");
  return ctx;
}

// màu nền / chữ theo chế độ sáng–tối
function useTheme() {
  const { dark } = useSettings();
  return {
    bg: dark ? "#121212" : "#fff",
    text: dark ? "#fff" : colors.text,
    muted: dark ? "#9CA3AF" : colors.muted,
  };
}

// ===== Các màn hình =====
function HomeScreen() {
  const t = useTheme();
  return (
    <View style={[s.center, { backgroundColor: t.bg }]}>
      <Text style={[s.big, { color: t.text }]}>Xin chào 👋</Text>
    </View>
  );
}

function ProfileScreen() {
  const t = useTheme();
  return (
    <View style={[s.center, { backgroundColor: t.bg }]}>
      <View style={s.avatar}><Text style={s.avatarText}>NA</Text></View>
      <Text style={[s.big, { color: t.text }]}>Nguyễn Văn An</Text>
      <Text style={{ color: t.muted, marginTop: 4 }}>an.nguyen@example.com</Text>
    </View>
  );
}

// ===== TODO 1: màn Cài đặt với 2 Switch =====
function SettingsScreen() {
  const { notify, setNotify, dark, setDark } = useSettings();
  const t = useTheme();

  return (
    <View style={[s.page, { backgroundColor: t.bg }]}>
      <View style={s.row}>
        <Text style={[s.label, { color: t.text }]}>Nhận thông báo</Text>
        <Switch
          value={notify}
          onValueChange={setNotify}
          trackColor={{ true: colors.red, false: colors.line }}
          thumbColor="#fff"
        />
      </View>

      <View style={s.row}>
        <Text style={[s.label, { color: t.text }]}>Giao diện tối</Text>
        <Switch
          value={dark}
          onValueChange={setDark}
          trackColor={{ true: colors.red, false: colors.line }}
          thumbColor="#fff"
        />
      </View>

      <Text style={[s.status, { color: t.muted }]}>
        Thông báo: {notify ? "BẬT" : "TẮT"} · Giao diện: {dark ? "tối" : "sáng"}
      </Text>
    </View>
  );
}

// ===== TODO 2: Drawer Navigator =====
export function DrawerApp() {
  const [notify, setNotify] = useState(true);  // mặc định BẬT
  const [dark, setDark] = useState(false);     // mặc định sáng
  const value = useMemo(() => ({ notify, setNotify, dark, setDark }), [notify, dark]);

  return (
    <SettingsContext.Provider value={value}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ route }) => ({
            drawerActiveTintColor: colors.red,
            drawerIcon: ({ color, size }) => (
              <Ionicons name={ICONS[route.name]} size={size} color={color} />
            ),
            headerStyle: { backgroundColor: dark ? "#1F1F1F" : "#fff" },
            headerTintColor: dark ? "#fff" : colors.text,
            drawerStyle: { backgroundColor: dark ? "#1F1F1F" : "#fff" },
            drawerInactiveTintColor: dark ? "#D1D5DB" : colors.text,
          })}
        >
          <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
          <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Hồ sơ" }} />
          <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: "Cài đặt" }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SettingsContext.Provider>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  big: { fontSize: 22, fontWeight: "700", marginTop: 12 },
  avatar: {
    width: 96, height: 96, borderRadius: 48, backgroundColor: colors.red,
    alignItems: "center", justifyContent: "center",
  },
  avatarText: { color: "#fff", fontSize: 32, fontWeight: "700" },
  page: { flex: 1, padding: 16 },
  row: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: colors.line,
  },
  label: { fontSize: 16 },
  status: { marginTop: 20, fontSize: 15 },
});