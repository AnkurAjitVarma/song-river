import { createFileRoute } from '@tanstack/react-router'
import SearchResults from "../components/SearchResults.tsx";
import { loaderDataSchema } from "../schemas/employeeSchema.tsx";
import { searchSchema } from "../schemas/searchSchema.tsx";
import Spinner from "../components/Spinner.tsx";
import { toast } from "sonner";

export const Route = createFileRoute('/')({
  component: SearchResults,
  validateSearch: (search) => searchSchema.parse(search),
  loaderDeps: ({ search: { q } }) => ({ q }),
  loader: async ({ deps: { q } }) => {
    const response = await fetch(`/api/employees?q=${q}`)
    if (!response.ok) throw new Error('Failed to fetch.');
    const data = await response.json()
    return loaderDataSchema.parse(data);
  },
  errorComponent: () => <div>Unable to fetch results.</div>,
  pendingComponent: Spinner,
  onError: (error: ErrorEvent) => {
    console.error('Error loading employee', error);
    toast.error('Server Error', {
      unstyled: true,
      description: error.message,
      duration: 3_000,
    });
  }
})
