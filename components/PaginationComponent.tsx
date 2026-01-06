import { PRODUCTS_PER_PAGE } from "@/src/constants";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";
import { useFiltersStore } from "@/src/stores/useFiltersStore";

type Props = {
  totalCount: number;
};

export default function PaginationComponent({ totalCount }: Props) {
  const pagesNumber = Math.ceil(totalCount / PRODUCTS_PER_PAGE);
  const { filters, setPage } = useFiltersStore();

  if (pagesNumber < 2) return null;

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {filters.page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setPage(filters.page - 1)}
            />
          </PaginationItem>
        )}

        {Array(pagesNumber)
          .fill("1")
          .map((_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                href="#"
                onClick={() => setPage(index + 1)}
                isActive={filters.page === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        {filters.page < pagesNumber && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => setPage(filters.page + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
