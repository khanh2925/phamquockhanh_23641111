import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { CategoryChips } from "../components/CategoryChips";
import { PriceFilter } from "../components/PriceFilter";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { EmptyState } from "../components/EmptyState";
import { LoadingView } from "../components/LoadingView";
import { ErrorView } from "../components/ErrorView";
import { getBooks } from "../services/bookService";
import { getCategories } from "../services/categoryService";
import { getErrorMessage } from "../api/client";
import { useDebounce } from "../hooks/useDebounce";
import { filterBooks, PriceRange } from "../utils/filters";
import { useCart } from "../store/hooks";
import { TabScreenProps } from "../navigation/types";
import { Book, Category } from "../types";
import { colors, radius } from "../theme";

export function HomeScreen({ navigation, route }: TabScreenProps<"Home">) {
  // BT7.3d: tổng số lượng trong giỏ cho nút giỏ nổi
  const { totalQuantity } = useCart();

  // BT7.5b: dữ liệu từ API + trạng thái tải / lỗi
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // 2 API độc lập → gọi SONG SONG
      const [b, c] = await Promise.all([getBooks(), getCategories()]);
      setBooks(b);
      setCategories(c);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const [searchOpen, setSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<PriceRange>(null);
  // Câu 5 (TraLoi.md): sắp xếp theo giá — null = giữ thứ tự gốc
  const [sort, setSort] = useState<"asc" | "desc" | null>(null);

  // BT7.7a: chỉ lọc sau khi ngừng gõ 400 ms
  const debouncedKeyword = useDebounce(keyword, 400);

  // BT7.7c: lọc kết hợp từ khoá + danh mục + giá; chỉ tính lại khi 1 trong 4 giá trị đổi
  //           + Câu 5: sắp xếp trên BẢN SAO ([...]) để không làm đổi mảng books gốc
  const visibleBooks = useMemo(() => {
    const filtered = filterBooks(books, { keyword: debouncedKeyword, categoryId, priceRange });
    if (sort === null) return filtered;
    return [...filtered].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
  }, [books, debouncedKeyword, categoryId, priceRange, sort]);

  // BT7.8b: nhận categoryId do tab Danh mục gửi sang, dùng xong thì xoá params
  useEffect(() => {
    const id = route.params?.categoryId;
    if (id !== undefined) {
      setCategoryId(id);
      navigation.setParams({ categoryId: undefined });
    }
  }, [route.params?.categoryId, navigation]);

  // BT7.7d / 7.7e: xoá mọi bộ lọc; nút "✕ Xóa bộ lọc" chỉ hiện khi đang lọc
  const hasFilter = keyword !== "" || categoryId !== null || priceRange !== null;
  const clearFilters = () => {
    setKeyword("");
    setCategoryId(null);
    setPriceRange(null);
  };

  // BT7.5c: 3 trạng thái — đang tải / lỗi / có dữ liệu
  let content: React.ReactNode;
  if (loading) {
    content = <LoadingView label="Đang tải sách…" />;
  } else if (error) {
    content = <ErrorView message={error} onRetry={load} />;
  } else {
    content = (
      <BookGrid
        data={visibleBooks}
        // BT7.2a: mở màn Chi tiết, gửi kèm bookId
        onPressBook={(b) => navigation.navigate("BookDetail", { bookId: b.id })}
        ListHeaderComponent={
          <View>
            <CategoryChips categories={categories} selectedId={categoryId} onSelect={setCategoryId} />
            <PriceFilter value={priceRange} onChange={setPriceRange} />
            {/* Câu 5: 2 nút sắp xếp, bấm lần nữa để bỏ */}
            <View style={styles.sortRow}>
              {(["asc", "desc"] as const).map((k) => {
                const active = sort === k;
                return (
                  <Pressable key={k} style={[styles.sortBtn, active && styles.sortBtnActive]} onPress={() => setSort(active ? null : k)}>
                    <Text style={[styles.sortText, active && styles.sortTextActive]}>
                      {k === "asc" ? "Giá tăng dần ↑" : "Giá giảm dần ↓"}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            {hasFilter && (
              <Pressable style={styles.clearChip} onPress={clearFilters}>
                <Text style={styles.clearText}>✕ Xóa bộ lọc</Text>
              </Pressable>
            )}
          </View>
        }
        ListEmptyComponent={
          <EmptyState
            emoji="🔎"
            title="Không tìm thấy sách phù hợp"
            message="Hãy thử từ khoá khác hoặc bỏ bớt bộ lọc."
            actionLabel="Xóa bộ lọc"
            onAction={clearFilters}
          />
        }
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="📚 BookStore" onSearchPress={() => setSearchOpen((v) => !v)} />
      {searchOpen && (
        <SearchBar
          value={keyword}
          onChangeText={setKeyword}
          onClose={() => {
            setSearchOpen(false);
            setKeyword("");
          }}
        />
      )}
      {content}
      <FloatingCartButton count={totalQuantity} onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  clearChip: {
    alignSelf: "flex-start", marginLeft: 12, marginBottom: 6, paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: radius.pill, backgroundColor: "#FEE2E2",
  },
  clearText: { color: colors.danger, fontWeight: "700", fontSize: 12 },
  sortRow: { flexDirection: "row", gap: 8, paddingHorizontal: 12, paddingBottom: 6 },
  sortBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill, borderWidth: 1, borderColor: colors.indigo, backgroundColor: "#fff" },
  sortBtnActive: { backgroundColor: colors.indigo },
  sortText: { color: colors.indigo, fontWeight: "600", fontSize: 12 },
  sortTextActive: { color: "#fff" },
});
