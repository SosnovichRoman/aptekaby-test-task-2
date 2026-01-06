"use client";

import Catalog from "@/components/Catalog";
import Filters from "@/components/Filters";
import FiltersTop from "@/components/FiltersTop";
import { productService } from "@/src/services/productService";
import { ProductType } from "@/src/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    productService.getAll().then((res: ProductType[]) => setProducts(res));
  }, []);

  if (products === undefined) return "Loading";

  return (
    <div className="flex bg-slate-100">
      <main className="max-w-[1320px] w-full mx-auto my-[100px]">
        <FiltersTop />
        <div className="grid grid-cols-[1fr_4fr] gap-4">
          <Filters products={products} />
          <Catalog products={products} />
        </div>
      </main>
    </div>
  );
}
