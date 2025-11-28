import { createFileRoute } from '@tanstack/react-router';
import Employee from '../../components/Employee.tsx';
import { employeeSchema } from "../../schemas/employeeSchema.tsx";
import Spinner from "../../components/Spinner.tsx";
import { toast } from "sonner";

export const Route = createFileRoute('/employees/$employeeId')({
  component: Employee,
  loader: async ({ params }) => {
    const response = await fetch(`/api/employees/${params.employeeId}`);
    if (!response.ok) throw new Error('Failed to fetch.');
    const data = await response.json();
    return employeeSchema.parse(data);
  },
  errorComponent: () => <div>Error loading employee</div>,
  pendingComponent: Spinner,
  onError: (error: ErrorEvent) => {
    console.error('Error loading employee', error);
    toast.error('Server Error', {
      description: error.message,
      unstyled: true,
      duration: 3_000,
    });
  }
});
