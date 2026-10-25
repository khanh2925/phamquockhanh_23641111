import React, { useCallback, useEffect, useState } from "react";
import { fetchPhone } from "../api/phoneApi";
import { ErrorBox } from "../components/ErrorBox";
import { Loading } from "../components/Loading";
import { Phone } from "../types";
import { SelectPhoneApp } from "./SelectPhoneApp";

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null); // dữ liệu lấy từ API
  const [error, setError] = useState<string | null>(null); // thông báo lỗi (nếu có)

  const load = useCallback(async () => {
    // TODO 1: xoá trạng thái cũ → màn hình quay về "Đang tải..."
    setError(null);
    setPhone(null);

    // TODO 2: gọi API, thành công thì lưu phone, thất bại thì lưu câu lỗi
    try {
      const data = await fetchPhone("1");
      setPhone(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Không tải được dữ liệu");
    }
  }, []);

  // TODO 3: gọi load() một lần khi màn hình mở lần đầu
  useEffect(() => {
    load();
  }, [load]);

  // TODO 4: có lỗi → hiện ErrorBox, bấm THỬ LẠI thì gọi lại load
  if (error) return <ErrorBox message={error} onRetry={load} />;

  // TODO 5: chưa có dữ liệu → vòng xoay "Đang tải..."
  if (!phone) return <Loading />;

  // TODO 6: có dữ liệu → dùng lại toàn bộ Bài 1
  return <SelectPhoneApp phone={phone} />;
}