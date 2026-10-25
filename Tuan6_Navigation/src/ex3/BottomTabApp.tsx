import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { PHONES } from "../data/phones";
import { colors } from "../theme";

type TabParamList = { Home: undefined; Search: undefined; Profile: undefined };
const Tab = createBottomTabNavigator<TabParamList>();

// tên icon: [khi chọn, khi không chọn]
const ICONS: Record<keyof TabParamList, [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]> = {
  Home: ["home", "home-outline"],
  Search: ["search", "search-outline"],
  Profile: ["person", "person-outline"],
};

// ===== Tab 1: Trang chủ – danh sách đơn giản =====
function HomeTab() {
  return (
    <FlatList
      data={PHONES}
      keyExtractor={(p) => p.id}
      contentContainerStyle={{ padding: 16, gap: 10 }}
      renderItem={({ item }) => (
        <View style={s.card}>
          <Text>{item.name.split(" - ")[0]}</Text>
        </View>
      )}
    />
  );
}

// ===== TODO 1: Tab 2: Tìm kiếm =====
function SearchTab() {
  const [keyword, setKeyword] = useState("");

  // lọc không phân biệt hoa/thường
  const kw = keyword.trim().toLowerCase();
  const results = PHONES.filter((p) => p.name.toLowerCase().includes(kw));

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập từ khóa"
        style={s.input}
      />
      <FlatList
        data={results}
        keyExtractor={(p) => p.id}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Text>{item.name.split(" - ")[0]}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={s.empty}>Không có kết quả cho “{keyword}”</Text>
        }
      />
    </View>
  );
}

// ===== TODO 2: Tab 3: Cá nhân =====
function ProfileTab() {
  const name = "Phạm Quốc Khánh";
  return (
    <View style={s.center}>
      <View style={s.avatar}>
        <Text style={s.avatarText}>{name.split(" ").pop()?.[0]}</Text>
      </View>
      <Text style={s.name}>{name}</Text>
      <Text style={s.email}>khanh@example.com</Text>
    </View>
  );
}

// ===== TODO 3: Bottom Tab Navigator =====
export function BottomTabApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: colors.muted,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={ICONS[route.name][focused ? 0 : 1]} size={size} color={color} />
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeTab} options={{ title: "Trang chủ" }} />
        <Tab.Screen name="Search" component={SearchTab} options={{ title: "Tìm kiếm" }} />
        <Tab.Screen name="Profile" component={ProfileTab} options={{ title: "Cá nhân" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 14, borderRadius: 8, borderWidth: 1, borderColor: colors.line },
  input: {
    borderWidth: 1, borderColor: colors.line, borderRadius: 8, backgroundColor: "#fff",
    paddingHorizontal: 12, paddingVertical: 10, margin: 16,
  },
  empty: { textAlign: "center", color: colors.muted, marginTop: 24 },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  avatar: {
    width: 96, height: 96, borderRadius: 48, backgroundColor: colors.red,
    alignItems: "center", justifyContent: "center",
  },
  avatarText: { color: "#fff", fontSize: 40, fontWeight: "700" },
  name: { marginTop: 14, fontSize: 22, fontWeight: "700", color: colors.text },
  email: { marginTop: 4, color: colors.muted },
});