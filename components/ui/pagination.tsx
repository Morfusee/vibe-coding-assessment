import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Simplified for now, just show current and neighbors or 1..5
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) pages.push(i);
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) pages.push(i);
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-gray-100 border-t border-(--color-primary-cool-gray-20)">
      {/* Left Side: Showing X to Y of Z + Items per page */}
      <div className="flex items-center gap-4 text-sm text-(--color-primary-cool-gray-60)">
        <span>
          Showing{" "}
          <span className="font-medium text-(--color-primary-cool-gray-90)">
            {totalItems > 0 ? startItem : 0}
          </span>{" "}
          to{" "}
          <span className="font-medium text-(--color-primary-cool-gray-90)">
            {endItem}
          </span>{" "}
          of{" "}
          <span className="font-medium text-(--color-primary-cool-gray-90)">
            {totalItems}
          </span>
        </span>

        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="h-8 px-2 border border-(--color-primary-cool-gray-30) rounded bg-white text-(--color-primary-cool-gray-90) focus:outline-none focus:border-(--color-primary-indigo-70)"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      {/* Right Side: Go to + Navigation */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-(--color-primary-cool-gray-60)">
          Go to
        </span>
        <input
          type="number"
          min={1}
          max={totalPages}
          className="h-8 w-12 px-2 text-center border border-(--color-primary-cool-gray-30) rounded focus:outline-none focus:border-(--color-primary-indigo-70)"
          defaultValue={currentPage}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const val = Number(e.currentTarget.value);
              if (val >= 1 && val <= totalPages) onPageChange(val);
            }
          }}
          onBlur={(e) => {
            const val = Number(e.target.value);
            if (val >= 1 && val <= totalPages) onPageChange(val);
            else e.target.value = currentPage.toString();
          }}
        />

        <div className="flex items-center gap-1 ml-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 text-(--color-primary-cool-gray-60) border-(--color-primary-cool-gray-30) bg-(--color-primary-cool-gray-10) hover:bg-(--color-primary-cool-gray-20)"
            disabled={currentPage === 1}
            onClick={() => onPageChange(1)}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 text-(--color-primary-cool-gray-60) border-(--color-primary-cool-gray-30) bg-(--color-primary-cool-gray-10) hover:bg-(--color-primary-cool-gray-20)"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {getPageNumbers().map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              className={`h-8 w-8 p-0 ${
                currentPage === page
                  ? "bg-(--color-primary-indigo-70) hover:bg-(--color-primary-indigo-80) text-white border-transparent"
                  : "text-(--color-primary-cool-gray-60) border-(--color-primary-cool-gray-30) bg-(--color-primary-cool-gray-10) hover:bg-(--color-primary-cool-gray-20)"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 text-(--color-primary-cool-gray-60) border-(--color-primary-cool-gray-30) bg-(--color-primary-cool-gray-10) hover:bg-(--color-primary-cool-gray-20)"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 text-(--color-primary-cool-gray-60) border-(--color-primary-cool-gray-30) bg-(--color-primary-cool-gray-10) hover:bg-(--color-primary-cool-gray-20)"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
