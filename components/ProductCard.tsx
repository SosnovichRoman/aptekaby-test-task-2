import { Button } from "@/components/ui/button";
import { ProductType } from "../src/types/types";

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white p-4 flex flex-col gap-4 rounded-lg">
      <img className="w-full" src={product.image} alt="" />
      <span className="text-xl font-semibold">{product.price} р.</span>
      <span className="flex-1">{product.title}</span>
      <span className="text-xs">{product.characteristics.manufacturer}</span>
      <Button>В корзину</Button>
    </div>
  );
}
