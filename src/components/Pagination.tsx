import type { IPaginationProps } from '@/types/common'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function Pagination({
  currentPage,
  totalPages,
  handleChangePage,
}: IPaginationProps) {
  if (totalPages <= 1) return null

  function getPageNumbers() {
    const pagesToShow = []
    pagesToShow.push(1)

    if (currentPage > 3) pagesToShow.push('...')

    if (currentPage > 1 && currentPage < totalPages) {
      if (currentPage > 2) pagesToShow.push(currentPage - 1)
      pagesToShow.push(currentPage)
      if (currentPage < totalPages - 1) pagesToShow.push(currentPage + 1)
    }

    if (currentPage < totalPages - 2) pagesToShow.push('..')

    if (totalPages > 1) pagesToShow.push(totalPages)

    return [...new Set(pagesToShow)]
  }

  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handleChangePage(currentPage - 1)}
            className={
              currentPage === 1 ? 'pointer-events-none opacity-50' : undefined
            }
          />
        </PaginationItem>
        {getPageNumbers().map((page, index) => (
          <PaginationItem key={index}>
            {page === '...' || page === '..' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => handleChangePage(Number(page))}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => handleChangePage(currentPage + 1)}
            className={
              currentPage === totalPages
                ? 'pointer-events-none opacity-50'
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  )
}
