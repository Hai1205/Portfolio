import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showPreviousNext?: boolean
  showFirstLast?: boolean
  siblingCount?: number
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showPreviousNext = true,
  showFirstLast = true,
  siblingCount = 1,
  size = "default",
  className,
}: PaginationProps) {
  const generatePageNumbers = () => {
    const pages = []

    // Always show first page
    if (showFirstLast) {
      pages.push(1)
    }

    // Calculate range around current page
    const startPage = Math.max(showFirstLast ? 2 : 1, currentPage - siblingCount)
    const endPage = Math.min(showFirstLast ? totalPages - 1 : totalPages, currentPage + siblingCount)

    // Add ellipsis after first page if needed
    if (showFirstLast && startPage > 2) {
      pages.push("...")
    }

    // Add pages around current page
    for (let i = startPage; i <= endPage; i++) {
      if (!showFirstLast || (i !== 1 && i !== totalPages)) {
        pages.push(i)
      }
    }

    // Add ellipsis before last page if needed
    if (showFirstLast && endPage < totalPages - 1) {
      pages.push("...")
    }

    // Always show last page
    if (showFirstLast && totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = generatePageNumbers()

  // Size configurations
  const sizeConfig = {
    default: {
      button: "h-10 w-10",
      icon: "h-4 w-4",
    },
    sm: {
      button: "h-8 w-8",
      icon: "h-3 w-3",
    },
    lg: {
      button: "h-12 w-12",
      icon: "h-5 w-5",
    },
  }

  // Get size configuration
  const { button: buttonSize, icon: iconSize } = sizeConfig[size]

  return (
    <nav className={cn("flex items-center justify-center gap-2", className)} aria-label="Pagination">
      {/* Previous Button */}
      {showPreviousNext && (
        <Button
          variant="default"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={cn(
            buttonSize,
            "transition-all duration-200",
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#623686]",
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className={iconSize} />
        </Button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <div
                key={`ellipsis-${index}`}
                className={cn(buttonSize, "flex items-center justify-center text-slate-400")}
                aria-hidden="true"
              >
                <MoreHorizontal className={iconSize} />
              </div>
            )
          }

          const pageNumber = page as number
          const isActive = pageNumber === currentPage

          return (
            <Button
              key={pageNumber}
              variant={isActive ? "default" : "default"}
              size="icon"
              onClick={() => onPageChange(pageNumber)}
              className={cn(
                buttonSize,
                "transition-all duration-200",
                isActive
                  ? "bg-[#623686] text-white shadow-sm"
                  : "bg-transparent hover:bg-[#6d20c5d7] hover:text-white text-white",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#623686]",
              )}
              aria-label={`Page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNumber}
            </Button>
          )
        })}
      </div>

      {/* Next Button */}
      {showPreviousNext && (
        <Button
          variant="default"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={cn(
            buttonSize,
            "transition-all duration-200",
            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#623686]",
          )}
          aria-label="Next page"
        >
          <ChevronRight className={iconSize} />
        </Button>
      )}
    </nav>
  )
}