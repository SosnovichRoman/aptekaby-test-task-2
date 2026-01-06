import { characteristicsMap } from "@/src/constants";
import Filter from "./Filter";
import { ProductType } from "@/src/types/types";

type Props = { products: ProductType[] };

export default function Filters({ products }: Props) {
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col gap-8 h-fit">
      {characteristicsMap.map(({ name, key }) => (
        <div key={key}>
          <div className="mb-4 font-semibold text-xl">{name}</div>
          <Filter characteristicName={key} products={products} />
        </div>
      ))}
    </div>
  );
}
