import { useFiltersStore } from "@/src/stores/useFiltersStore";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

export default function Sorting() {
  const { filters, setSort } = useFiltersStore();

  return (
    <Select
      defaultValue="default"
      value={filters.sort}
      onValueChange={(value) => setSort(value as "default" | "asc" | "desc")}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">По умолчанию</SelectItem>
        <SelectItem value="asc">Сначала дешевые</SelectItem>
        <SelectItem value="desc">Сначала дорогие</SelectItem>
      </SelectContent>
    </Select>
  );
}

// placeholder="По умолчанию"
