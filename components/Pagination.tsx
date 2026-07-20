'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex items-center justify-center gap-4"
    >
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-md border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          ← Previous
        </Link>
      ) : (
        <span className="rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-gray-400">
          ← Previous
        </span>
      )}

      <span className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-md border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Next →
        </Link>
      ) : (
        <span className="rounded-md border border-gray-200 bg-gray-100 px-4 py-2 text-gray-400">
          Next →
        </span>
      )}
    </nav>
  );
}