import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { HomeScreen } from "./screens/HomeScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { CartScreen } from "./screens/CartScreen";

import { TabBar, TabKey } from "./components/TabBar";

import {
  BOOKS,
  CART_ITEMS,
  CartItem,
  Book,
} from "./data";

export default function App() {
  // Tab hiện tại
  const [activeTab, setActiveTab] =
    useState<TabKey>("home");

  // Sách đang được chọn để xem chi tiết
  const [selectedBookId, setSelectedBookId] =
    useState<number | null>(null);

  // Giỏ hàng
  const [cartItems, setCartItems] =
    useState<CartItem[]>(CART_ITEMS);

  // Tìm sách đang được chọn
  const selectedBook =
    BOOKS.find((book) => book.id === selectedBookId) ??
    null;

  // Tổng số lượng sản phẩm trong giỏ
  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // ==============================
  // THÊM SÁCH VÀO GIỎ
  // ==============================

  const handleAddToCart = (book: Book) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.book.id === book.id
      );

      // Nếu sách đã có trong giỏ
      // -> tăng số lượng
      if (existingItem) {
        return currentItems.map((item) =>
          item.book.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // Nếu chưa có
      // -> thêm sách mới
      return [
        ...currentItems,
        {
          book,
          quantity: 1,
        },
      ];
    });
  };

  // ==============================
  // CHUYỂN TAB
  // ==============================

  const handleChangeTab = (tab: TabKey) => {
    // Khi chuyển tab thì thoát màn chi tiết sách
    setSelectedBookId(null);

    setActiveTab(tab);
  };

  // ==============================
  // NỘI DUNG CHÍNH
  // ==============================

  const renderContent = () => {
    // Nếu đang chọn sách
    // -> hiện màn chi tiết
    if (selectedBook) {
      return (
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBookId(null)}
          onAddToCart={() =>
            handleAddToCart(selectedBook)
          }
        />
      );
    }

    // TAB TRANG CHỦ
    if (activeTab === "home") {
      return (
        <HomeScreen
          cartCount={cartCount}
          onPressBook={(id) =>
            setSelectedBookId(id)
          }
          onPressCart={() =>
            setActiveTab("cart")
          }
        />
      );
    }

    // TAB GIỎ HÀNG
    if (activeTab === "cart") {
      return <CartScreen items={cartItems} />;
    }

    // TAB DANH MỤC
    if (activeTab === "category") {
      return (
        <Placeholder
          title="Danh mục"
          text="Nội dung Danh mục đang được minh họa trên Trang chủ."
        />
      );
    }

    // TAB TÀI KHOẢN
    return (
      <Placeholder
        title="Tài khoản"
        text="Tài liệu hiện tại chưa yêu cầu xây dựng màn hình Tài khoản."
      />
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {renderContent()}

        {/* Khi đang xem chi tiết sách thì ẩn TabBar
            để thanh Thêm vào giỏ không bị chồng lên */}
        {!selectedBook && (
          <TabBar
            active={activeTab}
            onChange={handleChangeTab}
          />
        )}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// ==============================
// PLACEHOLDER
// ==============================

function Placeholder({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderTitle}>
        {title}
      </Text>

      <Text style={styles.placeholderText}>
        {text}
      </Text>
    </View>
  );
}

// ==============================
// STYLE
// ==============================

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  body: {
    flex: 1,
  },

  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    paddingBottom: 80,
  },

  placeholderTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1E1B4B",
    marginBottom: 8,
  },

  placeholderText: {
    fontSize: 14,
    textAlign: "center",
    color: "#5B6B7F",
  },
});