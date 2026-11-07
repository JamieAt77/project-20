import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export async function listItems() {
  const response = await api.get("/items");
  return response.data.items || [];
}
