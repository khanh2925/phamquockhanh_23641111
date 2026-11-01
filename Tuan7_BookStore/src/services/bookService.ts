import { api } from "../api/client";
import { Book } from "../types";

export interface BookQuery {
  categoryId?: number;
  q?: string;
}

// Component KHÔNG gọi axios trực tiếp — mọi lời gọi API nằm trong thư mục services
// BT7.5a: GET /books (có thể kèm query ?categoryId=…)
export async function getBooks(params?: BookQuery): Promise<Book[]> {
  const res = await api.get<Book[]>("/books", { params });
  return res.data;
}

// BT7.5a: GET /books/:id
export async function getBookById(id: number): Promise<Book> {
  const res = await api.get<Book>(`/books/${id}`);
  return res.data;
}
