import { createFileRoute } from '@tanstack/react-router'
import SearchResult from "../components/SearchResult.tsx";

export const Route = createFileRoute('/')({
  component: SearchResult,
  validateSearch: (search) => {
    return {
      q: (search.q as string) || "",
    }
  },
  loaderDeps: ({ search: { q } }) => ({ q }),
  loader: async ({ deps: { q } }) => {
    const response = await fetch(`/api/employees?q=${q}`)
    if (!response.ok) throw new Error('Failed to fetch search results');
    return await response.json()
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Unable to fetch results.</div>,
})
