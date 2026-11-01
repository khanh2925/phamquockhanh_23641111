# Buổi 7 — Trả lời câu hỏi bổ sung

**Họ tên:** Phạm Quốc Khánh · **MSSV:** 23641111

## 1. Cấu trúc điều hướng

BookDetail được đăng ký ở Native Stack (ngoài cùng), không nằm trong Bottom Tab. Vì vậy khi mở, màn Chi tiết được đẩy lên trên toàn bộ màn `Tabs`: nó che cả Tab Bar và có sẵn nút ← để quay về đúng vị trí cũ ở Home. Nếu đặt BookDetail vào Tab, nó sẽ thành một tab thứ năm: Tab Bar vẫn hiện ở dưới, không có nút ← và không có lịch sử "quay lại", người dùng phải tự bấm tab khác để rời màn này.

## 2. Redux

Redux Toolkit dùng thư viện Immer bên trong `createSlice`. Reducer nhận một bản nháp (draft) của state; lệnh `state.items.push(...)` chỉ sửa trên bản nháp đó, sau đó Immer so sánh và tạo ra một state mới bất biến, state cũ giữ nguyên. Nếu bỏ `useMemo` trong `useCart`, tổng số lượng và tổng tiền vẫn hiển thị đúng, nhưng phép `reduce` sẽ bị tính lại ở mọi lần component render (kể cả khi `items` không đổi). Với giỏ nhỏ thì không thấy khác biệt; `useMemo` chỉ để tối ưu hiệu năng chứ không quyết định kết quả đúng hay sai.

## 3. Promise.all

`Promise.all` sẽ thất bại ngay khi một trong các promise bị lỗi. Nếu `getCategories()` lỗi còn `getBooks()` thành công thì cả khối `try` nhảy vào `catch`, Home chỉ hiện ErrorView dù sách đã tải được. Có thể dùng `Promise.allSettled`: nó chờ tất cả xong và trả về trạng thái từng phần (`fulfilled` / `rejected`), nên vẫn hiện được danh sách sách, chỉ thiếu hàng chip danh mục. Đánh đổi là code phải tự kiểm tra kết quả của từng request và tự quyết định hiển thị gì khi chỉ một phần lỗi (giao diện "nửa có nửa không"), phức tạp hơn một trạng thái lỗi chung.

## 4. Debounce

Nếu gọi `setTimeout` thẳng trong `onChangeText`, mỗi lần gõ một phím lại tạo thêm một hẹn giờ mới và không có ai huỷ hẹn giờ cũ, nên gõ 10 ký tự vẫn lọc 10 lần, chỉ là bị trễ đi chứ không gộp lại thành một. Đặt trong `useEffect` có hàm dọn dẹp `return () => clearTimeout(t)` thì mỗi khi giá trị đổi, React huỷ hẹn giờ trước rồi mới tạo hẹn giờ mới, nên chỉ lần gõ cuối cùng được áp dụng. Hàm dọn dẹp còn chạy khi component bị gỡ (unmount), tránh việc hẹn giờ cũ gọi `setState` lên một component không còn tồn tại.

## 5. Code bổ sung — sắp xếp theo giá

Thêm một state và sửa `visibleBooks` trong `HomeScreen.tsx`; sắp xếp trên **bản sao** `[...filtered]` để không làm thay đổi mảng gốc:

```tsx
const [sort, setSort] = useState<"asc" | "desc" | null>(null);

const visibleBooks = useMemo(() => {
  const filtered = filterBooks(books, { keyword: debouncedKeyword, categoryId, priceRange });
  if (sort === null) return filtered;
  return [...filtered].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
}, [books, debouncedKeyword, categoryId, priceRange, sort]);
```

Giao diện: thêm 2 nút "Giá tăng dần ↑" / "Giá giảm dần ↓" dưới hàng lọc giá, bấm lần nữa để bỏ sắp xếp. Ảnh kết quả: xem báo cáo (Hình 10.1, 10.2).
