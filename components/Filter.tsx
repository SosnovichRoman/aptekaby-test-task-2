import { ProductType } from "@/src/types/types";
import { Checkbox } from "./ui/checkbox";
import { useFiltersStore } from "@/src/stores/useFiltersStore";

type Props = {
  characteristicName: keyof ProductType["characteristics"];
  products: ProductType[];
};

export default function Filter({ characteristicName, products }: Props) {
  const { addCharacteristic, deleteCharacteristic, filters } =
    useFiltersStore();

  const values = new Set(
    products
      .map((product) => product.characteristics?.[characteristicName])
      ?.filter((v) => typeof v === "string")
  );

  return (
    <div>
      {[...values].map((item) => (
        <label className="flex items-center gap-2" key={item}>
          <Checkbox
            checked={
              filters.characteristics[characteristicName]?.some(
                (value) => item === value
              ) || false
            }
            onCheckedChange={(checked) => {
              if (checked) addCharacteristic(characteristicName, item);
              else deleteCharacteristic(characteristicName, item);
            }}
          />
          {item}
        </label>
      ))}
    </div>
  );
}
