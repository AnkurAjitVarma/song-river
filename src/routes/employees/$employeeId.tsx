import { createFileRoute } from '@tanstack/react-router';
import Employee from '../../components/Employee.tsx';
import {employeeSchema} from "../../schemas/employeeSchema.tsx";

export const Route = createFileRoute('/employees/$employeeId')({
  component: Employee,
  loader: async ({ params }) => {
    const response = await fetch(`/api/employees/${params.employeeId}`);
    if (!response.ok) throw new Error('Failed to fetch employee');
    const data = await response.json();
    return employeeSchema.parse(data);
  },
  errorComponent: () => <div>Error loading employee</div>,
  pendingComponent: () => <div>Loading...</div>,
});
