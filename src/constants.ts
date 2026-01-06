import { ProductType } from "./types/types";

export const characteristicsMap: {
  name: string;
  key: keyof ProductType["characteristics"];
}[] = [
  {
    name: "Бренд",
    key: "brand",
  },
  {
    name: "Форма выпуска",
    key: "releaseForm",
  },
  {
    name: "Дозировка",
    key: "dossage",
  },
  {
    name: "Количество в упаковке",
    key: "quantityPerPackage",
  },
  {
    name: "Страна производства",
    key: "country",
  },
  {
    name: "Температура хранения",
    key: "storageTemperature",
  },
  {
    name: "Срок годности",
    key: "expirationDate",
  },
  {
    name: "Рецептурный отпуск",
    key: "isByPrescription",
  },
  {
    name: "Производитель",
    key: "manufacturer",
  },
];

export const PRODUCTS_PER_PAGE = 12;
