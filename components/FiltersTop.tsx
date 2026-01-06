import { useFiltersStore } from "@/src/stores/useFiltersStore";
import { ProductType } from "@/src/types/types";
import { XIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import Sorting from "./Sorting";

export default function FiltersTop() {
  const { filters, deleteCharacteristic, resetCharacteristics } =
    useFiltersStore();

  return (
    <div className="flex gap-10 mb-10">
      <div className="flex gap-4 flex-1">
        {Object.values(filters.characteristics).some(
          (value) => value.length > 0
        ) && (
          <button
            type="button"
            className="bg-white flex items-center gap-2 p-2 rounded-md hover:opacity-50 hover:line-through cursor-pointer"
            onClick={() => resetCharacteristics()}
          >
            Очистить всё
            <XIcon width={16} height={16} />
          </button>
        )}
        {Object.entries(filters.characteristics).map(([key, value]) => (
          <Fragment key={key}>
            {value.map((item) => (
              <button
                key={item}
                type="button"
                className="bg-white flex items-center gap-2 p-2 rounded-md hover:opacity-50 hover:line-through cursor-pointer"
                onClick={() =>
                  deleteCharacteristic(
                    key as keyof ProductType["characteristics"],
                    item
                  )
                }
              >
                {item}
                <XIcon width={16} height={16} />
              </button>
            ))}
          </Fragment>
        ))}
      </div>
      <Sorting />
    </div>
  );
}
