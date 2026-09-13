import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Header } from "./components/Header";
import { CategoryChips } from "./components/CategoryChips";
import { BookGrid } from "./components/BookGrid";
import { FloatingCartButton } from "./components/FloatingCartButton";
import { BOOKS } from "./data";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.screen}>
      {/* 1. Header cố định */}
      <Header />

      {/* 2. Nội dung có thể cuộn */}
      <ScrollView contentContainerStyle={styles.content}>
        <CategoryChips />

        <View style={styles.grid}>
          <BookGrid
            books={BOOKS}
            onPressBook={(id) => console.log("Mở sách:", id)}
          />
        </View>
      </ScrollView>

      {/* 3. Nút giỏ hàng nổi */}
      <FloatingCartButton
        count={cartCount}
        onPress={() => setCartCount((n) => n + 1)}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 16,
    paddingBottom: 100,
  },

  grid: {
    marginTop: 20,
  },
});