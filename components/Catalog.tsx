import ProductCard from "@/components/ProductCard";
import { useFiltersStore } from "@/src/stores/useFiltersStore";
import { ProductType } from "@/src/types/types";
import PaginationComponent from "./PaginationComponent";
import { PRODUCTS_PER_PAGE } from "@/src/constants";

type Props = {
  products: ProductType[];
};

export default function Catalog({ products }: Props) {
  const { filters } = useFiltersStore();
  const filteredProducts = products.filter((product) => {
    for (const key in filters.characteristics) {
      let typedKey = key as keyof ProductType["characteristics"];

      const characteristicsList = filters.characteristics[typedKey];

      if (
        characteristicsList &&
        characteristicsList.length > 0 &&
        !characteristicsList.some(
          (item) => item === product.characteristics[typedKey]
        )
      ) {
        return false;
      }
    }
    return true;
  });

  const filteredAndSortedProducts = filteredProducts.sort((a, b) => {
    if (filters.sort === "asc") return a.price - b.price;
    if (filters.sort === "desc") return b.price - a.price;
    return 0;
  });

  const paginatedProducts = filteredAndSortedProducts.slice(
    (filters.page - 1) * PRODUCTS_PER_PAGE,
    filters.page * PRODUCTS_PER_PAGE
  );

  console.log(filters.page);

  return (
    <div className="h-fit">
      <div className="grid grid-cols-4 gap-4">
        {paginatedProducts.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
      <PaginationComponent totalCount={filteredAndSortedProducts.length} />
    </div>
  );
}
