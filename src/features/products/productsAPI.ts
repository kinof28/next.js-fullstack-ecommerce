import { ProductPreview } from "./productsSlice";

export async function fetchProductsPreview(): Promise<ProductPreview[]> {
  const response = await fetch("/api/productsPreview", {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  return result;
}
